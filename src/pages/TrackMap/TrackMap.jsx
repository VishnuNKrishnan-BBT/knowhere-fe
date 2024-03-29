import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import Map, { Source, Layer, Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapStyles from './map.module.css'
import { recenter, flyToSite } from '../../mapUtils/mapManipulators'
import NavMenuPrimary from '../../components/NavMenuPrimary/NavMenuPrimary';
import LoadingOverlayForMap from '../../components/LoadingOverlayForMap/LoadingOverlayForMap';
import { getPolylineConfig, getInitialPolylineCoords, addNewVisitedLocation } from './mapHelpers';
import Map_VisitedLocations_Desktop from '../../components/Map_VisitedLocations_Desktop/Map_VisitedLocations_Desktop';
import GoogleIcon from '../../components/GoogleIcon/GoogleIcon';
import FinishFlag from '../../uiAssets/finishFlag.svg'
import Map_VehicleDetailsBar from '../../components/Map_VehicleDetailsBar/Map_VehicleDetailsBar';
import Map_mapControls from '../../components/Map_mapControls/Map_mapControls';
import { getDayStartEndTimestamps, getToday } from '../../utils/utils';
import VehicleMarker from '../../components/VehicleMarker/VehicleMarker';

function TrackMap() {

    // User Experience
    const [isLoading, setIsLoading] = useState(true)
    const [leftPaneView, setLeftPaneView] = useState('locations')
    const [mobileLocationsPaneActive, setMobileLocationsPaneActive] = useState(false)

    const toggleLeftPaneView = () => {
        if (leftPaneView == 'locations') {
            setLeftPaneView('calendar')
        } else if (leftPaneView == 'calendar') {
            setLeftPaneView('locations')
        }
    }

    const toggleMobileLocationsPaneActive = () => {
        setMobileLocationsPaneActive(!mobileLocationsPaneActive)
    }

    // Polyine
    const [coords, setCoords] = useState([])
    const [polylineEnabled, setPolylineEnabled] = useState(true)

    const togglePolylineEnabled = () => {
        setPolylineEnabled(!polylineEnabled)
    }

    //Marker Info
    const [allMarkerInfoEnabled, setAllMarkerInfoEnabled] = useState(true)

    const toggleAllMarkerInfoEnabled = () => {
        setAllMarkerInfoEnabled(!allMarkerInfoEnabled)
    }
    //Map
    const mapRef = useRef(null)
    const [viewport, setViewport] = useState({
        latitude: coords.length > 0 ? coords[0].latitude : 24.4,
        longitude: coords.length > 0 ? coords[0].longitude : 54.5,
        zoom: 1,
        pitch: 0,
        bearing: 0
    })
    const [zoom, setZoom] = useState(13)
    const [pitch, setPitch] = useState(0)
    const [bearing, setBearing] = useState(0)

    const [followModeEnabled, setFollowModeEnabled] = useState(true)

    const toggleFollowModeEnabled = () => {
        setFollowModeEnabled(!followModeEnabled)

        if (!followModeEnabled) { //Using if NOT enabled - When user tries to enable followMode, the value will be disabled. This is when we want to set enabled = true and also recenter the map.
            recenter(mapRef, coords[coords.length - 1][1], coords[coords.length - 1][0])
        }
    }

    // Visited Locations
    const [visitedLocations, setVisitedLocations] = useState([])

    // Markers
    const [markerPosition, setMarkerPosition] = useState(null)
    const [markerHeading, setMarkerHeading] = useState(0)

    //Speed
    const [liveSpeed, setLiveSpeed] = useState(null)

    //Websocket Ref - Use this to utilize the WS connection outside useEffect
    const socketRef = useRef(null)

    //Finish loading
    useEffect(() => {
        const today = getToday()
        const todayTimestamps = getDayStartEndTimestamps(today.day, today.month, today.year)

        getInitialPolylineCoords(todayTimestamps.startTimestamp, todayTimestamps.endTimestamp).then(coords => {
            var polyLineCoords = []
            coords.map((coord, key) => {
                polyLineCoords.push([coord.longitude, coord.latitude])
            })
            setCoords(polyLineCoords)
        })



        //Initializing websocket connection for live tracking
        const socket = new WebSocket(process.env.REACT_APP_KNOWHERE_BACKEND_KW_MS_WS_LIVE_LOCATION)

        // Connection opened
        socket.addEventListener('open', (event) => {
            console.log('WebSocket connection opened:', event)
            const initialMessage = JSON.stringify({ //==========REPLACE THESE HARDCODED VALUES!!!==============
                trackerId: "API_TEST_MOB",
                authToken: "tegw6637288jjchd"
            })
            socket.send(initialMessage);
            console.log('Sent initial message:', initialMessage);
        })

        // Listen for messages
        socket.addEventListener('message', (event) => {
            const receivedMessage = JSON.parse(event.data)
            // console.log('Received message:', receivedMessage)

            //===========PERFORM A TYPE CHECK FOR MESSAGE HERE============

            if (
                receivedMessage?.data?.waypoint?.data?.latitude !== undefined &&
                receivedMessage?.data?.waypoint?.data?.longitude !== undefined &&
                receivedMessage?.data?.waypoint?.data?.heading !== undefined
            ) {
                setCoords(prev => [...prev, [receivedMessage?.data?.waypoint?.data?.longitude, receivedMessage?.data?.waypoint?.data?.latitude]])
                setMarkerPosition([receivedMessage?.data?.waypoint?.data?.longitude, receivedMessage?.data?.waypoint?.data?.latitude])
                setMarkerHeading(receivedMessage?.data?.waypoint?.data?.heading)

                setLiveSpeed(receivedMessage?.data?.waypoint?.data?.speed)

                if (followModeEnabled) {
                    const speed = receivedMessage?.data?.waypoint?.data?.speed
                    var zoom = 15

                    if ((speed * 3.6) <= 60) {
                        zoom = 16
                    }

                    if ((speed * 3.6) > 60 && (speed * 3.6) <= 80) {
                        zoom = 15
                    }

                    if ((speed * 3.6) > 80 && (speed * 3.6) <= 100) {
                        zoom = 14
                    }

                    if ((speed * 3.6) > 100) {
                        zoom = 13
                    }

                    flyToSite(mapRef, receivedMessage?.data?.waypoint?.data?.latitude, receivedMessage?.data?.waypoint?.data?.longitude, { zoom: zoom, bearing: receivedMessage?.data?.waypoint?.data?.heading })
                }
            }

            //Visited Locations Update
            if (
                receivedMessage?.data?.resolvedLocation?.data?.timestamp !== undefined &&
                receivedMessage?.data?.resolvedLocation?.data?.latitude !== undefined &&
                receivedMessage?.data?.resolvedLocation?.data?.longitude !== undefined &&
                receivedMessage?.data?.resolvedLocation?.data?.uuid !== undefined &&
                receivedMessage?.data?.resolvedLocation?.data?.locationMain !== undefined &&
                receivedMessage?.data?.resolvedLocation?.data?.locationSub !== undefined
            ) {
                addNewVisitedLocation(visitedLocations, {
                    timestamp: receivedMessage?.data?.resolvedLocation?.data?.timestamp,
                    uuid: receivedMessage?.data?.resolvedLocation?.data?.uuid,
                    locationMain: receivedMessage?.data?.resolvedLocation?.data?.locationMain,
                    locationSub: receivedMessage?.data?.resolvedLocation?.data?.locationSub
                }, setVisitedLocations)
            }
        })

        // Connection closed
        socket.addEventListener('close', (event) => {
            console.log('WebSocket connection closed:', event)
        })

        // Save the socket reference to use it later
        socketRef.current = socket

        setTimeout(() => {
            setIsLoading(false)
        }, 5000)

        return () => {
            socket.close()
        }
    }, [followModeEnabled])

    useEffect(() => {
        console.log('visitedLocations', visitedLocations);
    }, [visitedLocations])


    const polylineConfig = {
        type: "Feature",
        properties: {},
        geometry: {
            type: "LineString",
            coordinates: coords
        }
    }

    return (
        <>
            {isLoading && <LoadingOverlayForMap />}
            <div className={mapStyles.mapContainer}>
                <Map_VisitedLocations_Desktop
                    view={leftPaneView}
                    visitedLocations={visitedLocations}
                    toggleView={toggleLeftPaneView} //Locations/Calendar
                    activeOnMobile={mobileLocationsPaneActive}
                    toggleMobileLocationsPaneActive={toggleMobileLocationsPaneActive}
                />
                <Map_VehicleDetailsBar
                    liveSpeed={liveSpeed}
                />
                <Map_mapControls
                    mapRef={mapRef}
                    viewport={viewport}
                    coords={coords}
                    polylineEnabled={polylineEnabled}
                    togglePolylineEnabled={togglePolylineEnabled}
                    followModeEnabled={followModeEnabled}
                    toggleFollowModeEnabled={toggleFollowModeEnabled}
                    toggleMobileLocationsPaneActive={toggleMobileLocationsPaneActive}
                    allMarkerInfoEnabled={allMarkerInfoEnabled}
                    toggleAllMarkerInfoEnabled={toggleAllMarkerInfoEnabled}
                />
                <Map
                    attributionControl={false}
                    {...viewport}
                    ref={mapRef}
                    projection={"globe"}
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                    mapStyle={"mapbox://styles/mapbox/streets-v12"}
                    onMove={evt => setViewport(evt.viewState)}
                >
                    {polylineEnabled &&
                        <Source id="polylineLayer" type="geojson" data={polylineConfig}>
                            <Layer
                                id="lineLayer"
                                type="line"
                                source="my-data"
                                layout={{
                                    "line-join": "round",
                                    "line-cap": "round"
                                }}
                                paint={{
                                    "line-color": "rgba(0,0,0,1)",
                                    "line-width": 3
                                }}
                            />
                        </Source>
                    }
                    {markerPosition !== null &&
                        <Marker
                            latitude={markerPosition[1]}
                            longitude={markerPosition[0]}
                            anchor='center'
                            pitchAlignment='map'
                            rotationAlignment='map'
                        >
                            {/* <div className={mapStyles.mapMarker} style={{ transform: `rotate(${markerHeading}deg)` }}>
                                <img src={VehicleTop} alt="" />
                                <div className={`${mapStyles.markerDetails}`}>
                                    <p>DXB E 43222</p>
                                </div>
                                {/*<GoogleIcon iconName={'assistant_navigation'} />
                            </div> */}
                            <VehicleMarker variant={'LR4'} heading={markerHeading} mapBearing={viewport.bearing} speed={liveSpeed} allMarkerInfoEnabled={allMarkerInfoEnabled} location={visitedLocations.length > 0 ? visitedLocations[visitedLocations.length - 1].locationMain : null} />
                        </Marker>
                    }
                </Map>
            </div>
        </>
    )
}

export default TrackMap

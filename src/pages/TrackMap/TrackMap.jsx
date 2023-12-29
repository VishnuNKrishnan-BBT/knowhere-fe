import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import Map, { Source, Layer, Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapStyles from './map.module.css'
import NavMenuPrimary from '../../components/NavMenuPrimary/NavMenuPrimary';
import LoadingOverlayForMap from '../../components/LoadingOverlayForMap/LoadingOverlayForMap';
import { getWayPoints } from '../../supportFunctions/getWayPoints';
import Map_VisitedLocations_Desktop from '../../components/Map_VisitedLocations_Desktop/Map_VisitedLocations_Desktop';
import GoogleIcon from '../../components/GoogleIcon/GoogleIcon';
import VehicleTop from '../../uiAssets/vehicleTop/vehicleTop0.png'
import Map_VehicleDetailsBar from '../../components/Map_VehicleDetailsBar/Map_VehicleDetailsBar';

function TrackMap() {
    const [isLoading, setIsLoading] = useState(true)

    const [coords, setCoords] = useState([])
    const [markerPosition, setMarkerPosition] = useState([22.5, 55.5])

    const mapRef = useRef(null)

    //Finish loading
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
        getCoords()
    }, [])


    const navigate = useNavigate();
    const onBack = () => {
        navigate('/track')
    }

    const [viewport, setViewport] = useState({
        latitude: coords.length > 0 ? coords[0].latitude : 24.4,
        longitude: coords.length > 0 ? coords[0].longitude : 54.5,
        zoom: 12,
        pitch: 0,
        bearing: 0
    })

    const flyToSite = () => {
        mapRef.current.flyTo({ center: getCoords()[0], duration: 60000, zoom: 15, pitch: 60 })
    }

    const getCoords = async () => {
        const coords = await getWayPoints('WCQ-975-BCQ-080')
        setMarkerPosition(coords[coords.length - 1])
        setCoords(coords)

        var returnValue = []
        coords.map((obj, key) => {
            returnValue.push(obj)
        })
        return coords
    }

    const dataOne = {
        type: "Feature",
        properties: {},
        geometry: {
            type: "LineString",
            coordinates: coords
        }
    }

    // TESTING ONLY
    const [heading, setHeading] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setHeading(Math.floor(Math.random() * 360))
        }, 5000)
    }, [])

    return (
        <>
            {isLoading && <LoadingOverlayForMap />}
            <div className={mapStyles.mapContainer}>
                <Map_VisitedLocations_Desktop />
                <Map_VehicleDetailsBar onClose={onBack} />
                <Map
                    attributionControl={false}
                    {...viewport}
                    ref={mapRef}
                    projection={"globe"}
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                    mapStyle={"mapbox://styles/mapbox/streets-v12"}
                    onMove={evt => setViewport(evt.viewState)}
                >
                    <Source id="polylineLayer" type="geojson" data={dataOne}>
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
                    <Marker
                        latitude={25}
                        longitude={55}
                    >
                        <div className={mapStyles.mapMarker} style={{ transform: `rotate(${heading}deg)` }}>
                            <img src={VehicleTop} alt="" />
                            {/* <GoogleIcon iconName={'assistant_navigation'} /> */}
                        </div>
                    </Marker>
                </Map>
            </div>
        </>
    )
}

export default TrackMap

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import Map, { Source, Layer, Marker } from 'react-map-gl'
import mapStyles from './map.module.css'
import vehicleTop from '../../assets/vehicleTop0.png'
import NavMenuPrimary from '../../components/NavMenuPrimary/NavMenuPrimary';
import LoadingOverlayForMap from '../../components/LoadingOverlayForMap/LoadingOverlayForMap';
import { getWayPoints } from '../../supportFunctions/getWayPoints';

function TrackMap() {
    const [isLoading, setIsLoading] = useState(true)

    const [markerPosition, setMarkerPosition] = useState([0, 0])

    const mapRef = useRef(null)

    //Finish loading
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
    }, [])


    const navigate = useNavigate();
    const onBack = () => {
        navigate('/track')
    }

    const [viewport, setViewport] = useState({
        latitude: 24.5,
        longitude: 54.5,
        zoom: 12,
        pitch: 75,
        bearing: 0
    })

    const flyToSite = () => {
        mapRef.current.flyTo({ center: getCoords()[0], duration: 60000, zoom: 15, pitch: 60 })
    }

    const getCoords = async () => {
        const coords = await getWayPoints('WCQ-975-BCQ-080')
        setMarkerPosition(coords[coords.length - 1])

        // var returnValue = []
        // coords.map((obj, key) => {
        //     returnValue.push(obj)
        // })
        return coords
    }

    const dataOne = {
        type: "Feature",
        properties: {},
        geometry: {
            type: "LineString",
            coordinates: getCoords()
        }
    }

    return (
        <>
            {isLoading && <LoadingOverlayForMap />}
            <div className={mapStyles.mapContainer}>
                {/* <NavMenuPrimary /> */}
                <Map
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
                    {/* <Marker
                        latitude={markerPosition[0]}
                        longitude={markerPosition[1]}
                    >
                        <div className={mapStyles.mapMarker}>
                            <img src={vehicleTop} alt="" />
                        </div>
                    </Marker> */}
                </Map>
                <button onClick={onBack} className={mapStyles.button}>Back</button>
            </div>
        </>
    )
}

export default TrackMap

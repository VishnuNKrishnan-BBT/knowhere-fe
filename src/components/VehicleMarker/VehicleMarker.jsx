import React from 'react'
import Styles from './VehicleMarker.module.css'
import VehicleTop from '../../uiAssets/vehicleTop/vehicleTop0.png'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function VehicleMarker({
    variant = null,
    heading = null,
    mapBearing = null,
    speed = null,
    allMarkerInfoEnabled = false,
    location = null
}) {
    return (
        <div className={`${Styles.wrapper}`} style={heading !== null ? { transform: `rotate(${heading}deg)` } : {}}>
            <div className={`${Styles.markerHolder}`}>
                {variant == null && <GoogleIcon iconName={'assistant_navigation'} />}
                {variant == 'LR4' && <img src={VehicleTop} alt="" />}
            </div>
            {allMarkerInfoEnabled &&
                <div className={`${Styles.infoHolder}`}>
                    <span className={`${Styles.infoContent}`}>DXB I 46209</span>
                    <span className={`${Styles.infoContent}`}>{speed !== null && speed < 0.277778 ? 0 : (speed * 3.6).toFixed(0)} km/h</span>
                    {location !== null && <span className={`${Styles.infoContent}`}>{location}</span>}
                </div>
            }
        </div>
    )
}

export default VehicleMarker

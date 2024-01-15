import React, { useEffect, useRef, useState } from 'react'
import Styles from './Map_VisitedLocations_Desktop.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function VisitedLocationItem({ timestamp, locationMain, locationSub, isLast }) {

    const card = useRef(null)
    const [connectorHeight, setConnectorHeight] = useState('0px')

    useEffect(() => {
        const cardHeight = window.getComputedStyle(card.current, null).getPropertyValue("height")
        setConnectorHeight(cardHeight)
    }, [])

    const time = new Date(timestamp)
    const hour = String(time.getHours()).padStart(2, '0');
    const minute = String(time.getMinutes()).padStart(2, '0');
    const displayTime = `${hour}:${minute}`

    return (
        <div className={`${Styles.item}`}>
            {/* Time */}
            <div className={`${Styles.timeStampConnectorWrapper}`}>
                <div className={`${Styles.timeWrapper}`}>





                    <div className={`${Styles.timeHolder}`}>
                        <p className={`${Styles.timestamp}`}>{displayTime}</p>
                    </div>
                </div>

                {!isLast && <div className={`${Styles.connector}`} style={{ height: `calc(${connectorHeight} - 20px)` }}></div>}
            </div>

            {/* Location */}
            <div className={`${Styles.locationWrapper}`} ref={card}>
                <p className={`${Styles.locationMain}`}>{locationMain}</p>
                <p className={`${Styles.locationSub}`}>{locationSub}</p>
            </div>

            <div className={`${Styles.infoIcon}`}>
                <GoogleIcon iconName={'location_on'} />
            </div>
        </div>
    )
}

export default VisitedLocationItem

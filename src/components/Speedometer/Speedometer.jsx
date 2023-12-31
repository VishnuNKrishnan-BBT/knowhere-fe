import React from 'react'
import Styles from './Speedometer.module.css'

function Speedometer({ speed = null }) {
    return (
        <div className={`${Styles.wrapper}`}>
            <span className={`${Styles.speed}`}>{speed}</span>
            <span className={`${Styles.unit}`}>km/h</span>
        </div>
    )
}

export default Speedometer

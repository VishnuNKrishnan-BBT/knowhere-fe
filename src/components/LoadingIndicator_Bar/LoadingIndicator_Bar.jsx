import React, { useEffect, useState } from 'react'
import Styles from './LoadingIndicator_Bar.module.css'

function LoadingIndicator_Bar({ ...props }) {

    const [message, setMessage] = useState((props.message && props.message != '') ? props.message : 'Loading')

    return (
        <div className={`${Styles.loadingComponentHolder}`}>

            {/* Loading Text */}
            <p className={`${Styles.loadingText}`}>{message}</p>

            {/* Loading Graphic */}
            <div className={Styles.barWrapper}>
                <div className={`${Styles.runningBar}`}></div>
            </div>
        </div>
    )
}

export default LoadingIndicator_Bar

import React from 'react'
import Styles from './LoadingOverlayForMap.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function LoadingOverlayForMap() {
    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.revolver}`}>
                <div className={`${Styles.revolverContent}`}>
                    <GoogleIcon iconName={'share_location'} />
                    <p>Loading Map</p>
                </div>
            </div>
        </div>
    )
}

export default LoadingOverlayForMap

import React from 'react'
import GlobalStyles from '../../global.module.css'
import Styles from './Map_mapControls.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import { recenter, zoomIn, zoomOut, rotateLeft, rotateRight } from '../../mapUtils/mapManipulators'

function Map_mapControls({
    mapRef = null,
    viewport = null,
    polylineEnabled = false,
    togglePolylineEnabled = null,
    followModeEnabled = false,
    toggleFollowModeEnabled = null,
    toggleMobileLocationsPaneActive = null,
    allMarkerInfoEnabled = false,
    toggleAllMarkerInfoEnabled = null
}) {
    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.ctaGroup}`}>
                <div className={`${Styles.ctaUp}`} onClick={() => (zoomIn(mapRef, viewport))}>
                    <GoogleIcon iconName={'add'} />
                </div>
                <div className={`${Styles.ctaDown}`} onClick={() => (zoomOut(mapRef, viewport))}>
                    <GoogleIcon iconName={'remove'} />
                </div>
            </div>

            <div className={`${Styles.ctaGroup}`}>
                <div className={`${Styles.ctaUp}`} onClick={() => (rotateLeft(mapRef, viewport))}>
                    <GoogleIcon iconName={'rotate_left'} />
                </div>
                <div className={`${Styles.ctaDown}`} onClick={() => (rotateRight(mapRef, viewport))}>
                    <GoogleIcon iconName={'rotate_right'} />
                </div>
            </div>

            <div className={`${Styles.ctaGroup} ${GlobalStyles.hideOnDesktop} ${GlobalStyles.hideOnTab}`} onClick={toggleMobileLocationsPaneActive}>
                <div className={`${Styles.singleCta}`}>
                    <GoogleIcon iconName={'list'} />
                </div>
            </div>

            <div className={`${Styles.ctaGroup}`}>
                <div className={`${Styles.ctaUp} ${polylineEnabled ? Styles.active : ''}`} onClick={togglePolylineEnabled}>
                    <GoogleIcon iconName={'route'} />
                </div>
                <div className={`${Styles.ctaDown} ${allMarkerInfoEnabled ? Styles.active : ''}`} onClick={toggleAllMarkerInfoEnabled}>
                    <GoogleIcon iconName={'no_crash'} />
                </div>
            </div>

            <div className={`${Styles.ctaGroup}`}>
                <div className={`${Styles.singleCta} ${followModeEnabled ? Styles.active : ''}`} onClick={toggleFollowModeEnabled}>
                    <GoogleIcon iconName={'adjust'} />
                </div>
            </div>
        </div>
    )
}

export default Map_mapControls

import React from 'react'
import Styles from './Map_mapControls.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import { recenter, zoomIn, zoomOut } from '../../mapUtils/mapManipulators'

function Map_mapControls({
    mapRef = null,
    viewport = null,
    coords = []
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
                <div className={`${Styles.ctaUp}`}>
                    <GoogleIcon iconName={'rotate_left'} />
                </div>
                <div className={`${Styles.ctaDown}`}>
                    <GoogleIcon iconName={'rotate_right'} />
                </div>
            </div>

            <div className={`${Styles.ctaGroup}`}>
                <div className={`${Styles.singleCta}`} onClick={() => (recenter(mapRef, coords[coords.length - 1][1], coords[coords.length - 1][0]))}>
                    <GoogleIcon iconName={'route'} />
                </div>
            </div>

            <div className={`${Styles.ctaGroup}`}>
                <div className={`${Styles.singleCta}`} onClick={() => (recenter(mapRef, coords[coords.length - 1][1], coords[coords.length - 1][0]))}>
                    <GoogleIcon iconName={'adjust'} />
                </div>
            </div>
        </div>
    )
}

export default Map_mapControls

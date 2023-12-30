import React from 'react'
import Styles from './Map_mapControls.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function Map_mapControls({
    zoomIn = null,
    zoomOut = null,
    recenter = null
}) {
    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.ctaGroup}`}>
                <div className={`${Styles.ctaUp}`} onClick={zoomIn}>
                    <GoogleIcon iconName={'add'} />
                </div>
                <div className={`${Styles.ctaDown}`} onClick={zoomOut}>
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
                <div className={`${Styles.singleCta}`} onClick={recenter}>
                    <GoogleIcon iconName={'adjust'} />
                </div>
            </div>
        </div>
    )
}

export default Map_mapControls

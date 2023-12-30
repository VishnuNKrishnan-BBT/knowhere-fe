import React from 'react'
import Styles from './Map_VehicleDetailsBar.module.css'
import Speedometer from '../Speedometer/Speedometer'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function Map_VehicleDetailsBar({
    onBack = null //To exit tracking screen and go back
}) {
    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.photoLicenseDetailsWrapper}`}>
                <div className={`${Styles.photo}`}></div>
                <div className={`${Styles.detailsWrapper}`}>
                    <span className={`${Styles.licenseNumber}`}>DXB E 43222</span>
                    <span className={`${Styles.vehicleDetails}`}>Land Rover LR4</span>
                    <span className={`${Styles.vehicleDetails}`}>Vishnu Navaneeth Krishnan</span>
                    <span className={`${Styles.vehicleDetails}`}>+971 50 673 8672</span>
                </div>
            </div>
            <Speedometer
                speed={122}
            />
            <div className={`${Styles.ctaHolder}`}>
                <div className={`${Styles.cta}`}>
                    <GoogleIcon iconName={'call'} />
                </div>
                <div className={`${Styles.cta}`}>
                    <GoogleIcon iconName={'share'} />
                </div>
                <div className={`${Styles.cta}`}>
                    <GoogleIcon iconName={'filter_alt'} />
                </div>
                <div className={`${Styles.cta}`}>
                    <GoogleIcon iconName={'info'} />
                </div>
                <div className={`${Styles.cta}`}>
                    <GoogleIcon iconName={'monitoring'} />
                </div>
                <div className={`${Styles.cta}`} onClick={onBack}>
                    <GoogleIcon iconName={'logout'} />
                </div>
            </div>
        </div>
    )
}

export default Map_VehicleDetailsBar

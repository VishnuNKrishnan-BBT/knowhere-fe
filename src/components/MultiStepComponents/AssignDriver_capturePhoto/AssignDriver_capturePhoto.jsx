import React from 'react'
import Styles from './AssignDriver.module.css'
import { useAssignDriverContext } from '../../../contexts/AssignDriverContext'
import GoogleIcon from '../../GoogleIcon/GoogleIcon'
import PhotoCapturer from '../../PhotoCapturer/PhotoCapturer'

function AssignDriver_capturePhoto({ ...props }) {

    const { photoBase64, setPhotoBase64 } = useAssignDriverContext()

    const capturePhoto = base64 => {
        setPhotoBase64(base64)
    }

    return (
        <>
            <h2 className={`${Styles.sectionTitle}`}>
                <GoogleIcon iconName={'add_a_photo'} style={{ transform: 'translateY(5px)', fontWeight: 500, marginRight: '5px' }} />
                Capture assignee's photo
            </h2>
            <PhotoCapturer
                photoBase64={photoBase64}
                onCapture={capturePhoto}
                qrCodeUrl={'https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&size=100x100&bgcolor=eee'}
            />

            <div className={`${Styles.ctaHolder}`}>
                <button className={`${Styles.secondaryCTA}`} onClick={() => { props.jumpToStep(2) }}>
                    <span className={`${Styles.label}`}>
                        <GoogleIcon iconName={'tab_close_right'} style={{ color: '#111', marginRight: '6px', transform: 'translateY(5px)' }} />
                        Skip this step
                    </span>
                </button>
                {
                    photoBase64 == '' ?
                        <button className={`${Styles.primaryCTA}`} onClick={(e) => { capturePhoto(e) }}>
                            <span className={`${Styles.label}`}>
                                Capture
                                <GoogleIcon iconName={'screenshot_frame'} style={{ color: '#eee', marginLeft: '6px', transform: 'translateY(5px)' }} />
                            </span>
                        </button>
                        :
                        <button className={`${Styles.primaryCTA}`} onClick={() => { props.jumpToStep(2) }}>
                            <span className={`${Styles.label}`}>
                                Continue
                                <GoogleIcon iconName={'navigate_next'} style={{ color: '#eee', marginLeft: '6px', transform: 'translateY(5px)' }} />
                            </span>
                        </button>
                }
            </div>
        </>
    )
}

export default AssignDriver_capturePhoto

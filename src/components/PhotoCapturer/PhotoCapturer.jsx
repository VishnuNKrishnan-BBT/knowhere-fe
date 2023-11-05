import React, { useRef, useState } from 'react'
import Styles from './PhotoCapturer.module.css'
import { isMobile } from 'react-device-detect'
import Webcam from 'react-webcam'

function PhotoCapturer({ ...props }) {

    const [isCapturing, setIsCapturing] = useState(true)

    //For webcam
    const videoConstraints = {
        width: 200,
        height: 200,
        facingMode: "user"
    }

    const webcamRef = useRef(null)

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            props.onCapture(imageSrc)
            setIsCapturing(false)
        }, [webcamRef])

    return (
        <>
            {!isMobile &&
                <div className={`${Styles.wrapper}`}>
                    <div className={`${Styles.photoHolder}`}>
                        {props.qrCodeUrl && <img className={`${Styles.qrCode}`} src={props.qrCodeUrl} alt="QR Code" />}
                    </div>
                </div>
            }
            {isMobile &&
                <div className={`${Styles.cameraFeedWrapper}`}>
                    <div className={`${Styles.cameraFeedHolder}`}>
                        {isCapturing ?
                            <Webcam
                                audio={false}
                                height={200}
                                screenshotFormat="image/jpeg"
                                width={200}
                                videoConstraints={videoConstraints}
                                ref={webcamRef}
                                mirrored
                            />
                            :
                            <img src={props.photoBase64} />
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default PhotoCapturer

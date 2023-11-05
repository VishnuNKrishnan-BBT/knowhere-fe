import React, { useEffect, useState } from 'react'
import Styles from './AssignDriver.module.css'
import GoogleIcon from '../../GoogleIcon/GoogleIcon'
import OtpInput from '../../OtpInput/OtpInput'

function AssignDriver_otpVerification({ ...props }) {

    const maxFailureAllowed = 5
    const maxResendAllowed = 5

    const [countDownEnded, setCountDownEnded] = useState(false)
    const [timerValue, setTimerValue] = useState(3)

    const [failureCount, setFailureCount] = useState(0)
    const [resendCount, setResendCount] = useState(0)

    useEffect(() => {
        if (timerValue === 0) {
            setCountDownEnded(true)
            return
        }

        const intervalId = setInterval(() => {
            setTimerValue(timerValue - 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [timerValue])

    const resendOtp = () => {
        if (resendCount < maxResendAllowed) {
            setTimerValue(3)
            setCountDownEnded(false)
            setResendCount(resendCount + 1)
        }
    }

    return (
        <>
            <h2 className={`${Styles.sectionTitle}`}>
                <GoogleIcon iconName={'pin'} style={{ transform: 'translateY(5px)', fontWeight: 500, marginRight: '5px' }} />
                One Time Password
            </h2>

            <div className={`${Styles.otpInputHolder}`}>
                {resendCount != maxResendAllowed && <OtpInput />}
                {
                    resendCount != maxResendAllowed &&
                    <p className={`${Styles.otpInstruction}`}>The OTP has been sent to +971506738672.</p>
                }

                {/* Resend Countdown */}
                {!countDownEnded && (resendCount < maxResendAllowed) && <p className={`${Styles.resendWaitingText}`}>Resend in {`00:${timerValue < 10 ? `0${timerValue}` : timerValue}`}</p>}

                {/* Resend Button */}
                {countDownEnded && (resendCount < maxResendAllowed) &&
                    <button className={`${Styles.secondaryCTA}`} onClick={resendOtp}>
                        <GoogleIcon iconName={'send'} />
                        <span className={`${Styles.label}`}>Resend</span>
                    </button>
                }

                {/* Max resend reached */}
                {resendCount == maxResendAllowed &&
                    <div>
                        <p className={`${Styles.errorIcon}`}>
                            <GoogleIcon iconName={'warning'} style={{ color: 'tomato' }} />
                        </p>
                        <p className={`${Styles.errorText}`}>
                            You have exhausted your allowed OTP limit. Please retry later.
                        </p>
                    </div>
                }
            </div>

            {/* CTAs */}
            <div className={`${Styles.ctaHolder}`}>
                <button className={`${Styles.secondaryCTA}`} onClick={() => { props.jumpToStep(2) }}>
                    <span className={`${Styles.label}`}>
                        <GoogleIcon iconName={'navigate_before'} style={{ color: '#111', marginRight: '6px', transform: 'translateY(5px)' }} />
                        Previous
                    </span>
                </button>
                <button className={`${Styles.primaryCTA}`} onClick={() => { props.jumpToStep(2) }}>
                    <span className={`${Styles.label}`}>
                        Finish
                        <GoogleIcon iconName={'navigate_next'} style={{ color: '#eee', marginLeft: '6px', transform: 'translateY(5px)' }} />
                    </span>
                </button>
            </div>
        </>
    )
}

export default AssignDriver_otpVerification

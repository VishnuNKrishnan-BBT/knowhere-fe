import React, { useEffect, useRef, useState } from 'react'
import Styles from './OtpInput.module.css'
import { logger } from '../../utils/utils'

function OtpInput({ ...props }) {

    const [activeBoxIndex, setActiveBoxIndex] = useState(0)

    const [digit1, setDigit1] = useState('')
    const [digit2, setDigit2] = useState('')
    const [digit3, setDigit3] = useState('')
    const [digit4, setDigit4] = useState('')
    const [digit5, setDigit5] = useState('')
    const [digit6, setDigit6] = useState('')

    const [givenOtp, setGivenOtp] = useState('')


    const inputDigitRef1 = useRef(null)
    const inputDigitRef2 = useRef(null)
    const inputDigitRef3 = useRef(null)
    const inputDigitRef4 = useRef(null)
    const inputDigitRef5 = useRef(null)
    const inputDigitRef6 = useRef(null)

    useEffect(() => {
        const newGivenOtp = `${digit1}${digit2}${digit3}${digit4}${digit5}${digit6}`
        setGivenOtp(newGivenOtp)
        setActiveBoxIndex(newGivenOtp.length)
    }, [digit1, digit2, digit3, digit4, digit5, digit6])

    const updateDigit = (index, value) => {
        if (index == 0) {
            value >= 0 && value <= 9 && setDigit1(value)
            inputDigitRef2.current.focus()
        } else if (index == 1) {
            value >= 0 && value <= 9 && setDigit2(value)
            inputDigitRef3.current.focus()
        } else if (index == 2) {
            value >= 0 && value <= 9 && setDigit3(value)
            inputDigitRef4.current.focus()
        } else if (index == 3) {
            value >= 0 && value <= 9 && setDigit4(value)
            inputDigitRef5.current.focus()
        } else if (index == 4) {
            value >= 0 && value <= 9 && setDigit5(value)
            inputDigitRef6.current.focus()
        } else if (index == 5) {
            value >= 0 && value <= 9 && setDigit6(value)
            inputDigitRef6.current.blur()
        }
    }

    return (
        <div className={`${Styles.wrapper}`}>
            <input type="text" value={givenOtp} hidden />
            <input className={`${Styles.digitBox}`} type='number' value={digit1} onChange={e => { updateDigit(0, e.target.value) }} ref={inputDigitRef1} autoFocus />
            <input className={`${Styles.digitBox}`} type='number' value={digit2} onChange={e => { updateDigit(1, e.target.value) }} ref={inputDigitRef2} />
            <input className={`${Styles.digitBox}`} type='number' value={digit3} onChange={e => { updateDigit(2, e.target.value) }} ref={inputDigitRef3} />
            <input className={`${Styles.digitBox}`} type='number' value={digit4} onChange={e => { updateDigit(3, e.target.value) }} ref={inputDigitRef4} />
            <input className={`${Styles.digitBox}`} type='number' value={digit5} onChange={e => { updateDigit(4, e.target.value) }} ref={inputDigitRef5} />
            <input className={`${Styles.digitBox}`} type='number' value={digit6} onChange={e => { updateDigit(5, e.target.value) }} ref={inputDigitRef6} />
        </div>
    )
}

export default OtpInput

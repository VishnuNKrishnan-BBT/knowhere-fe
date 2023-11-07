import React, { useState } from 'react'
import Styles from './PageContent_AddNewVehicle.module.css'
import InputWithIcon from '../InputWithIcon/InputWithIcon'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import { addNewVehicle } from '../../supportFunctions/addNewVehicle'

function PageContent_AddNewVehicle() {

    const [trackerId, setTrackerId] = useState('')
    const [licensePlate, setLicensePlate] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [colour, setColour] = useState('')
    const [transmission, setTransmission] = useState('')
    const [odometer, setOdometer] = useState('')
    const [engineNumber, setEngineNumber] = useState(null)
    const [chassisNumber, setChassisNumber] = useState(null)

    const [response, setResponse] = useState('')

    const handleSubmit = async () => {
        const response = await addNewVehicle({
            vehicleId: trackerId,
            trackerId: trackerId,
            licensePlate: licensePlate,
            manufacturer: manufacturer,
            model: model,
            year: year,
            odometer: odometer,
            colour: colour,
            transmission: transmission,
            engineNumber: engineNumber,
            chassisNumber: chassisNumber
        })
        setResponse(response.message)
    }

    return (
        <>
            <div className={`${Styles.content}`}>
                <div className={`${Styles.inputsHolder}`}>
                    <InputWithIcon value={trackerId} onChange={setTrackerId} placeholder={'Tracker ID'} icon={'memory'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 1, gridColumnEnd: 3 }} />
                    <InputWithIcon value={trackerId} onChange={setTrackerId} placeholder={'Vehicle ID'} icon={'directions_car'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 3, gridColumnEnd: 5 }} />
                    <InputWithIcon value={licensePlate} onChange={setLicensePlate} placeholder={'License Plate'} icon={'123'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 1, gridColumnEnd: 5 }} />
                    <InputWithIcon value={manufacturer} onChange={setManufacturer} placeholder={'Manufacturer'} icon={'star_half'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 1, gridColumnEnd: 3 }} />
                    <InputWithIcon value={model} onChange={setModel} placeholder={'Model'} icon={'hotel_class'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 3, gridColumnEnd: 5 }} />
                    <InputWithIcon value={year} onChange={setYear} placeholder={'Year'} icon={'calendar_month'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 1, gridColumnEnd: 3 }} />
                    <InputWithIcon value={colour} onChange={setColour} placeholder={'Colour'} icon={'palette'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 3, gridColumnEnd: 5 }} />
                    <InputWithIcon value={transmission} onChange={setTransmission} placeholder={'Transmission'} icon={'auto_transmission'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 1, gridColumnEnd: 3 }} />
                    <InputWithIcon value={odometer} onChange={setOdometer} placeholder={'Odometer'} icon={'speed'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 3, gridColumnEnd: 5 }} />
                    <InputWithIcon value={engineNumber} onChange={setEngineNumber} placeholder={'Engine Number'} icon={'component_exchange'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 1, gridColumnEnd: 5 }} />
                    <InputWithIcon value={chassisNumber} onChange={setChassisNumber} placeholder={'Chassis Number'} icon={'car_repair'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 1, gridColumnEnd: 5 }} />

                    <div className={`${Styles.ctaHolder}`} style={{ gridColumnStart: 1, gridColumnEnd: 5 }}>
                        <button className={`${Styles.secondaryCTA}`}>
                            <span className={`${Styles.label}`}>
                                <GoogleIcon iconName={'navigate_before'} style={{ color: '#111', marginRight: '6px', transform: 'translateY(5px)' }} />
                                Previous
                            </span>
                        </button>
                        <button className={`${Styles.primaryCTA}`} onClick={handleSubmit}>
                            <span className={`${Styles.label}`}>
                                Continue
                                <GoogleIcon iconName={'navigate_next'} style={{ color: '#eee', marginLeft: '6px', transform: 'translateY(5px)' }} />
                            </span>
                        </button>
                    </div>
                </div>
                <p>{response}</p>
            </div>
        </>
    )
}

export default PageContent_AddNewVehicle

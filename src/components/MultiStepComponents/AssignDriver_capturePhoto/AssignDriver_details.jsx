import React, { useEffect } from 'react'
import Styles from './AssignDriver.module.css'
import GoogleIcon from '../../GoogleIcon/GoogleIcon'
import DropdownSelector from '../../DropdownSelector/DropdownSelector'
import InputWithIcon from '../../InputWithIcon/InputWithIcon'
import { dropdownList_countries } from './AssignDriver.helpers'
import {
    retrieveObject,
    getClientGeolocation
} from '../../../utils/utils'
import { useAssignDriverContext } from '../../../contexts/AssignDriverContext'
import { addNewAssignee } from '../../../supportFunctions/addNewAssignee'

function AssignDriver_details({ ...props }) {

    //Import Assign DriverContext
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        diallingCode,
        setDiallingCode,
        mobileNumber,
        setMobileNumber,
        emailId,
        setEmailId,
        company,
        setCompany
    } = useAssignDriverContext()

    useEffect(() => {
        getClientGeolocation()
    }, [])

    const onContinue = async step => {
        addNewAssignee({
            firstName: firstName,
            lastName: lastName,
            primaryContactCC: diallingCode,
            primaryContactNumber: mobileNumber,
            primaryContactEmail: emailId
        })
        props.jumpToStep(step)
    }

    return (
        <>
            <h2 className={`${Styles.sectionTitle}`}>
                <GoogleIcon iconName={'info'} style={{ transform: 'translateY(5px)', fontWeight: 500, marginRight: '5px' }} />
                Assignee's Details
            </h2>
            {/* <PhotoCapturer qrCodeUrl={'https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&size=100x100&bgcolor=eee'} /> */}

            <div className={`${Styles.detailsInputHolder}`}>
                <InputWithIcon value={firstName} onChange={setFirstName} placeholder={'First Name'} icon={'person'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 1, gridColumnEnd: 5 }} />
                <InputWithIcon value={lastName} onChange={setLastName} placeholder={'Last Name'} icon={'supervisor_account'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 5, gridColumnEnd: 9 }} />
                <InputWithIcon value={diallingCode} onChange={setDiallingCode} placeholder={'Code'} icon={'flag'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 1, gridColumnEnd: 3 }} />
                <InputWithIcon value={mobileNumber} onChange={setMobileNumber} placeholder={'Mobile Number'} icon={'dialpad'} inputType={'number'} style={{ gridColumnStart: 3, gridColumnEnd: 9 }} />
                <InputWithIcon value={company} onChange={setCompany} placeholder={'Company'} icon={'apartment'} style={{ gridColumnStart: 1, gridColumnEnd: 9 }} />
                <InputWithIcon value={emailId} onChange={setEmailId} placeholder={'Email'} icon={'alternate_email'} style={{ gridColumnStart: 1, gridColumnEnd: 9 }} />
            </div>

            <div className={`${Styles.ctaHolder}`}>
                <button className={`${Styles.secondaryCTA}`} onClick={() => { props.jumpToStep(1) }}>
                    <span className={`${Styles.label}`}>
                        <GoogleIcon iconName={'navigate_before'} style={{ color: '#111', marginRight: '6px', transform: 'translateY(5px)' }} />
                        Previous
                    </span>
                </button>
                <button className={`${Styles.primaryCTA}`} onClick={() => onContinue(3)}>
                    <span className={`${Styles.label}`}>
                        Continue
                        <GoogleIcon iconName={'navigate_next'} style={{ color: '#eee', marginLeft: '6px', transform: 'translateY(5px)' }} />
                    </span>
                </button>
            </div>
        </>
    )
}

export default AssignDriver_details

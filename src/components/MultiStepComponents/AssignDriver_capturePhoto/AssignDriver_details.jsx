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

function AssignDriver_details({ ...props }) {
    useEffect(() => {
        getClientGeolocation()
    }, [])
    return (
        <>
            <h2 className={`${Styles.sectionTitle}`}>
                <GoogleIcon iconName={'info'} style={{ transform: 'translateY(5px)', fontWeight: 500, marginRight: '5px' }} />
                Assignee's Details
            </h2>
            {/* <PhotoCapturer qrCodeUrl={'https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&size=100x100&bgcolor=eee'} /> */}

            <div className={`${Styles.detailsInputHolder}`}>
                <InputWithIcon placeholder={'First Name'} icon={'person'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 1, gridColumnEnd: 5 }} />
                <InputWithIcon placeholder={'Last Name'} icon={'supervisor_account'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 5, gridColumnEnd: 9 }} />
                <InputWithIcon placeholder={'Code'} icon={'flag'} className={`${Styles.fullRowOnMobile}`} style={{ gridColumnStart: 1, gridColumnEnd: 3 }} />
                <InputWithIcon placeholder={'Mobile Number'} icon={'dialpad'} inputType={'number'} style={{ gridColumnStart: 3, gridColumnEnd: 9 }} />
                <InputWithIcon placeholder={'Company'} icon={'apartment'} style={{ gridColumnStart: 1, gridColumnEnd: 9 }} />
                <InputWithIcon placeholder={'Email'} icon={'alternate_email'} style={{ gridColumnStart: 1, gridColumnEnd: 9 }} />
            </div>

            <div className={`${Styles.ctaHolder}`}>
                <button className={`${Styles.secondaryCTA}`} onClick={() => { props.jumpToStep(1) }}>
                    <span className={`${Styles.label}`}>
                        <GoogleIcon iconName={'navigate_before'} style={{ color: '#111', marginRight: '6px', transform: 'translateY(5px)' }} />
                        Previous
                    </span>
                </button>
                <button className={`${Styles.primaryCTA}`} onClick={() => { props.jumpToStep(3) }}>
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

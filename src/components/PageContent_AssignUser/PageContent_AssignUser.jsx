import React, { useState } from 'react'
import GlobalStyles from '../../global.module.css'
import Styles from './PageContent_AssignUser.module.css'
import { AssignDriver_ContextProvider } from '../../contexts/AssignDriverContext'
import MultiStepIndicator from '../MultiStepIndicator/MultiStepIndicator'
import GenericCard from '../GenericCard/GenericCard'
import AssignDriver_capturePhoto from '../MultiStepComponents/AssignDriver_capturePhoto/AssignDriver_capturePhoto'
import AssignDriver_details from '../MultiStepComponents/AssignDriver_capturePhoto/AssignDriver_details'
import AssignDriver_otpVerification from '../MultiStepComponents/AssignDriver_capturePhoto/AssignDriver_otpVerification'

function PageContent_AssignUser() {

    const genericCardStyle = { width: '100%' }

    const [currentStage, setCurrentStage] = useState(1)

    const jumpToStep = stepNumber => {
        setCurrentStage(stepNumber)
    }

    const multiStepItems = [
        {
            id: 1,
            title: 'Photo'
        },
        {
            id: 2,
            title: 'Details'
        },
        {
            id: 3,
            title: 'OTP Verification'
        },
    ]

    return (
        <>
            <div className={`${Styles.content}`}>
                {/* Left Container */}
                <div className={`${Styles.leftContainer} ${GlobalStyles.fullWidthOnMobile}`}>
                    <AssignDriver_ContextProvider>
                        <MultiStepIndicator steps={multiStepItems} activeStage={currentStage} jumpToStep={jumpToStep} />
                        {currentStage == 1 && <AssignDriver_capturePhoto jumpToStep={jumpToStep} />}
                        {currentStage == 2 && <AssignDriver_details jumpToStep={jumpToStep} />}
                        {currentStage == 3 && <AssignDriver_otpVerification jumpToStep={jumpToStep} />}
                    </AssignDriver_ContextProvider>
                </div>

                {/* Right Container */}
                <div className={`${Styles.rightContainer} ${GlobalStyles.hideOnMobile}`}>
                    <GenericCard
                        style={genericCardStyle}
                        isTitle
                        icon={'directions_car'}
                        title={'Vehicle Info'}
                    />

                    <GenericCard
                        style={genericCardStyle}
                        title={'Brand'}
                        content={'Nissan'}
                    />

                    <GenericCard
                        style={genericCardStyle}
                        title={'Model'}
                        content={'Patrol'}
                    />

                    <GenericCard
                        style={genericCardStyle}
                        title={'Type'}
                        content={'SUV'}
                    />

                    <GenericCard
                        style={genericCardStyle}
                        title={'Colour'}
                        content={'White'}
                    />

                    <GenericCard
                        style={genericCardStyle}
                        title={'Engine Number'}
                        content={'47839928EXKB320'}
                    />

                    <GenericCard
                        style={genericCardStyle}
                        title={'Chassis Number'}
                        content={'75849938EDKL9540'}
                    />

                    <GenericCard
                        style={genericCardStyle}
                        title={'Odometer'}
                        content={'87,545 kms'}
                    />

                    <GenericCard
                        style={genericCardStyle}
                        title={'Next Service'}
                        content={'100,000 kms'}
                    />

                    <GenericCard
                        style={genericCardStyle}
                        isTitle
                        icon={'card_membership'}
                        title={'Registration Info'}
                    />

                    <GenericCard
                        style={genericCardStyle}
                        title={'License Plate'}
                        content={'AUH F 56789'}
                    />

                    <GenericCard
                        style={genericCardStyle}
                        title={'Expiry'}
                        content={'10-04-2023'}
                    />

                </div>
            </div>
        </>
    )
}

export default PageContent_AssignUser

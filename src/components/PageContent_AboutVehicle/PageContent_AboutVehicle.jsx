import React, { useEffect, useState } from 'react'
import Styles from './PageContent_AboutVehicle.module.css'
import GenericCard from '../GenericCard/GenericCard'
import { useMainContext } from '../../contexts/MainContext'
import { getVehicleDetails } from '../../supportFunctions/getVehicleDetails'
import LoadingIndicator_Bar from '../LoadingIndicator_Bar/LoadingIndicator_Bar'

function PageContent_AboutVehicle({ ...props }) {

    // Import context
    const {
        isLoading_pageContent,
        setIsLoading_pageContent,
        currentVehicle
    } = useMainContext()

    //Vehicle details object
    const [vehicleData, setVehicleData] = useState(null)

    const updateVehicleData = async () => {
        setIsLoading_pageContent(true)
        const vehicleData = await getVehicleDetails(currentVehicle)
        setVehicleData({
            brand: vehicleData.vehicleType,
            year: 2022,
            colour: 'Nara Bronze',
            weight: '2000 KG',
            type: vehicleData.vehicleType.split(', ')[1] ? vehicleData.vehicleType.split(', ')[1] : 'N/A',
            licensePlate: vehicleData.licensePlate,
            plateSource: vehicleData.licensePlate.split(' ')[0]
        })
        setIsLoading_pageContent(false)
    }

    useEffect(() => {
        updateVehicleData()
    }, [])

    return (
        <>
            {isLoading_pageContent && <LoadingIndicator_Bar message={'Loading vehicle details'} />}

            {!isLoading_pageContent &&
                <div className={`${Styles.content}`}>
                    <div className={`${Styles.itemsHolder}`}>
                        <GenericCard
                            title={'Vehicle'}
                            isTitle
                            icon={'directions_car'}
                        />

                        <GenericCard
                            title={'Brand and Model'}
                            content={vehicleData?.brand}
                        />

                        <GenericCard
                            title={'Year'}
                            content={vehicleData?.year}
                        />

                        <GenericCard
                            title={'Colour'}
                            content={vehicleData?.colour}
                        />

                        <GenericCard
                            title={'Weight'}
                            content={vehicleData?.weight}
                        />

                        <GenericCard
                            title={'Type'}
                            content={vehicleData?.type}
                        />

                        <GenericCard
                            title={'Maximum Passengers Allowed'}
                            content={'6 + 1'}
                        />

                        <GenericCard
                            title={'Engine Number'}
                            content={'SALLAVARGGYM9088932'}
                        />

                        <GenericCard
                            title={'Chassis Number'}
                            content={'SVGGMKXC56690450'}
                        />

                        <GenericCard
                            title={'Registration'}
                            icon={'card_membership'}
                            isTitle
                        />

                        <GenericCard
                            title={'Registration Number'}
                            content={vehicleData?.licensePlate}
                        />

                        <GenericCard
                            title={'Source'}
                            content={vehicleData?.plateSource}
                        />

                        <GenericCard
                            title={'Date of Registration'}
                            content={'06 OCT 2022'}
                        />

                        <GenericCard
                            title={'Date of Expiry of Registration'}
                            content={'05 OCT 2023'}
                        />

                        <GenericCard
                            title={'Insurance'}
                            icon={'health_and_safety'}
                            isTitle
                        />

                        <GenericCard
                            title={'Policy Number'}
                            content={'8990029493CHID99002'}
                        />

                        <GenericCard
                            title={'Provider'}
                            content={'Qatar Insurance Company'}
                        />

                        <GenericCard
                            title={'Type'}
                            content={'Comprehensive'}
                        />

                        <GenericCard
                            title={'Coverage'}
                            content={'GCC'}
                        />

                        <GenericCard
                            title={'Start Date'}
                            content={'06 OCT 2022'}
                        />

                        <GenericCard
                            title={'End Date'}
                            content={'05 NOV 2023'}
                        />

                        <GenericCard
                            title={'Assignee'}
                            icon={'account_circle'}
                            isTitle
                        />

                        <GenericCard
                            title={'Assigned to'}
                            content={'Vishnu Navaneeth Krishnan'}
                        />

                        <GenericCard
                            title={'Assignee Primary Contact No.'}
                            content={'+971 506738672'}
                        />


                        <GenericCard
                            title={'Assignee Secondary Contact No.'}
                            content={'Not Provided'}
                        />

                        <GenericCard
                            title={'Assignee Email ID'}
                            content={'vishnunavaneet@gmail.com'}
                        />

                        <GenericCard
                            title={'Date of Assignment'}
                            content={'12 OCT 2022'}
                        />

                        <GenericCard
                            title={'Date of Expiry of Assignment'}
                            content={'11 OCT 2023'}
                        />

                        <GenericCard
                            title={'Assignee ID'}
                            content={'KW-AI-092839992'}
                        />

                        <GenericCard
                            title={'Assignee History'}
                            icon={'history'}
                            isTitle
                        />

                        <GenericCard
                            title={'Notifications'}
                            icon={'notifications'}
                            isTitle
                        />

                        <GenericCard
                            title={'Warnings'}
                            icon={'warning'}
                            isTitle
                        />

                        <GenericCard
                            title={'Actions'}
                            icon={'edit_square'}
                            isTitle
                        />
                    </div>
                </div>}
        </>
    )
}

export default PageContent_AboutVehicle

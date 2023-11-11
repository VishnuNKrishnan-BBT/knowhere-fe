import React, { useEffect, useState } from 'react'
import Styles from './PageContent_Track.module.css'
import VehicleInfoCard from '../VehicleInfoCard/VehicleInfoCard'
import FleetSearch from '../FleetSearch/FleetSearch'
import { useMainContext } from '../../contexts/MainContext'
import { logger } from '../../utils/utils'
import { getAllVehiclesList } from '../../supportFunctions/getAllVehicleList'
import LoadingIndicator_Bar from '../LoadingIndicator_Bar/LoadingIndicator_Bar'

function PageContent_Track() {

    // Import context
    const {
        setCurrentVehicle,
        setIsLoading_pageContent,
        isLoading_pageContent,
        fleetDetailsArray,
        setFleetDetailsArray,
        fleetSearchQuery,
        fleetSearchOnlineStatus,
        fleetSearchModel
    } = useMainContext()

    //Keyword filter
    const filterFleetByKeyword = (keyword) => {
        const filteredArray = fleetDetailsArray.filter((item) => {
            // Check if the driver includes the keyword (case-insensitive)
            return true

            // item.driver.toLowerCase().includes(keyword.toLowerCase()) ||
            //     item.model.toLowerCase().includes(keyword.toLowerCase()) ||
            //     item.contactNo.toLowerCase().includes(keyword.toLowerCase()) ||
            //     item.licensePlate.toLowerCase().includes(keyword.toLowerCase())
        })

        return filteredArray;
    }

    //Online status filter
    const filterFleetByOnlineStatus = (status) => {

        const allowedValues = [
            'all',
            'online',
            'offline'
        ]

        if (!allowedValues.includes(status)) {
            logger('warn', 'filterFleetByOnlineStatus: Invalid \'status\' provided.')
            return
        }

        const filteredArray = fleetDetailsArray.filter((item) => {
            // Check if the online key matches the given status
            if (status !== 'all') {
                return item.onlineStatus == status
            } else if (status == 'all') {
                return true //Return all, don't filter anything
            }
        })

        return filteredArray;
    }

    //Model filter
    const filterFleetByModel = (model) => {

        const filteredArray = fleetDetailsArray.filter((item) => {
            // Check if the online key matches the given status
            if (model !== 'all') {
                return item.model == model
            } else if (model == 'all') {
                return true
            }
        })

        return filteredArray;
    }



    const [filteredFleetDetails, setFilteredFleetDetails] = useState(fleetDetailsArray)

    //Unset current vehicle from context if user returns to /track page
    useEffect(() => {
        setCurrentVehicle(null)
    }, [])

    useEffect(() => {
        var returnArray = []

        const keywordFilteredArray = filterFleetByKeyword(fleetSearchQuery)
        const onlineStatusFilteredArray = filterFleetByOnlineStatus(fleetSearchOnlineStatus)
        const modelFilteredArray = filterFleetByModel(fleetSearchModel)

        fleetDetailsArray.map((obj, key) => {
            if (
                keywordFilteredArray.includes(obj) &&
                onlineStatusFilteredArray.includes(obj) &&
                modelFilteredArray.includes(obj) &&
                !returnArray.includes(obj) //To avoid duplicate entries
            ) {
                returnArray.push(obj)
            }
        })

        logger('table', returnArray)
        setFilteredFleetDetails(returnArray)
    }, [fleetSearchQuery, fleetSearchOnlineStatus, fleetSearchModel])


    //API Call to collect vehicle list
    const setFleetData = async () => {
        setIsLoading_pageContent(true)
        var returnArray = []
        const fleetData = await getAllVehiclesList()
        fleetData !== null && fleetData.map((obj, key) => {
            returnArray.push(obj)
        })
        try {
            setFleetDetailsArray(returnArray)
        } catch {
            setFleetDetailsArray([])
        }
        setIsLoading_pageContent(false)
    }

    useEffect(() => {
        setFleetData()
    }, [])

    return (
        <>
            {isLoading_pageContent && <LoadingIndicator_Bar message={'Loading fleet...'} />}

            {!isLoading_pageContent &&
                <>
                    <FleetSearch />
                    <div className={`${Styles.content}`}>
                        <div className={`${Styles.itemsHolder}`}>
                            {filteredFleetDetails.map((obj, key) => {
                                return (
                                    <VehicleInfoCard
                                        key={key}
                                        details={obj}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default PageContent_Track

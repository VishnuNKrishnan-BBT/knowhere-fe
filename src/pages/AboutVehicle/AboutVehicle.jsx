import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageContentWrapper from '../../components/PageContentWrapper/PageContentWrapper'
import PageContent_AboutVehicle from '../../components/PageContent_AboutVehicle/PageContent_AboutVehicle'
import { useMainContext } from '../../contexts/MainContext'

function AboutVehicle() {

    // Import context
    const { currentVehicle } = useMainContext()

    const navigate = useNavigate()

    //Redirect to /track if currentVehicle == null
    useEffect(() => {
        if (currentVehicle == null) {
            navigate('/track')
        }
    }, [])

    const sideBarItems = [
        {
            title: 'Manage Vehicle Details',
            googleIcon: 'edit_square',
            link: ''
        },
        {
            title: 'Onboard Tracker Actions',
            googleIcon: 'memory',
            link: ''
        }
    ]

    return (
        <>
            <PageContentWrapper
                pageTitle={currentVehicle}
                pageDescription={'Vehicle Information'}
                sideBarItems={sideBarItems}
                content={<PageContent_AboutVehicle />}
                enableBackBtn
                backLink={'/track'}
            />
        </>
    )
}

export default AboutVehicle

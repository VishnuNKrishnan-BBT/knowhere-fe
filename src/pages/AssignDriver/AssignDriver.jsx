import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMainContext } from '../../contexts/MainContext'
import PageContentWrapper from '../../components/PageContentWrapper/PageContentWrapper'
import PageContent_AssignUser from '../../components/PageContent_AssignUser/PageContent_AssignUser'

function AssignDriver() {

    // Import context
    const { currentVehicle } = useMainContext()

    const navigate = useNavigate()
    const location = useLocation()

    //Redirect to /track if currentVehicle == null
    useEffect(() => {
        if (currentVehicle == null) {
            navigate('/track')
        }
    }, [])

    return (
        <>
            <PageContentWrapper
                pageTitle={'Assign User'}
                pageDescription={'Assign this vehicle to a new user'}
                googleIcon={'person_add'}
                // sideBarItems={sideBarItems}
                content={<PageContent_AssignUser />}
                enableBackBtn
                backLink={'/track'}
            />
        </>
    )
}

export default AssignDriver

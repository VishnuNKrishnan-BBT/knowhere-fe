import React from 'react'
import Styles from './AddNewVehicle.module.css'
import { useMainContext } from '../../contexts/MainContext'
import PageContentWrapper from '../../components/PageContentWrapper/PageContentWrapper'
import PageContent_AddNewVehicle from '../../components/PageContent_AddNewVehicle/PageContent_AddNewVehicle'

function AddNewVehicle() {

    // Import context
    const { currentVehicle } = useMainContext()

    return (
        <>
            <PageContentWrapper
                pageTitle={'Add New Vehicle'}
                pageDescription={'Fill in all mandatoy fields to proceed...'}
                sideBarItems={[]}
                content={<PageContent_AddNewVehicle />}
                enableBackBtn
                backLink={'/track'}
            />
        </>
    )
}

export default AddNewVehicle

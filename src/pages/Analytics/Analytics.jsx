import React from 'react'
import Styles from './Analytics.module.css'
import PageContentWrapper from '../../components/PageContentWrapper/PageContentWrapper'
import PageContent_Analytics from '../../components/PageContent_Analytics/PageContent_Analytics'

function Analytics() {

    const sideBarItems = [
        {
            title: 'General',
            googleIcon: 'check_circle',
            link: ''
        },
        {
            title: 'Vehicle Specific',
            googleIcon: 'directions_car',
            link: ''
        },
        {
            title: 'Driver Specific',
            googleIcon: 'person',
            link: ''
        },
    ]

    return (
        <>
            <PageContentWrapper
                pageTitle={'Analytics'}
                googleIcon={'monitoring'}
                pageDescription={'Get detailed insights into how your fleet is managed...'}
                sideBarItems={sideBarItems}
                content={<PageContent_Analytics />}
            />
        </>
    )
}

export default Analytics

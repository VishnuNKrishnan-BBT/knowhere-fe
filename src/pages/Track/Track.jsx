import React, { useEffect } from 'react'
import { logger } from '../../utils/utils'
import PageContentWrapper from '../../components/PageContentWrapper/PageContentWrapper'
import Settings from '../Settings/Settings'
import PageContent_Track from '../../components/PageContent_Track/PageContent_Track'

function Track() {

    const sideBarItems = [
        {
            title: 'Bird\'s Eye View',
            googleIcon: 'helicopter',
            link: '/track/birdseye'
        },
        {
            title: 'Track Single Vehicle',
            googleIcon: 'target',
            link: ''
        },
        {
            title: 'Link New Vehicle',
            googleIcon: 'add_circle',
            link: '/newVehicle'
        }
    ]

    return (
        <>
            <PageContentWrapper
                pageTitle={'Track'}
                googleIcon={'share_location'}
                pageDescription={'Watch your fleet movement in realtime...'}
                sideBarItems={sideBarItems}
                content={<PageContent_Track />}
            />
        </>
    )
}

export default Track

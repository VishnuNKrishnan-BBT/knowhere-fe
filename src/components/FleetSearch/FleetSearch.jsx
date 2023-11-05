import React, { useEffect, useState } from 'react'
import GlobalStyles from '../../global.module.css'
import Styles from './FleetSearch.module.css'
import DropdownSelector from '../DropdownSelector/DropdownSelector'
import { useMainContext } from '../../contexts/MainContext'
import { retrieveObject } from '../../utils/utils'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function FleetSearch() {

    // Import Context
    const {
        fleetSearchQuery,
        setFleetSearchQuery,
        fleetSearchModel,
        setFleetSearchModel,
        dropdownList_onlineStatus,
        dropdownList_model,
        fleetSearchOnlineStatus,
        setFleetSearchOnlineStatus
    } = useMainContext()

    const dropdownList_hasParcels = [
        {
            icon: 'published_with_changes',
            label: 'All',
            value: 'all',
            description: 'All Options'
        },
        {
            icon: 'check',
            label: 'Yes',
            value: 'yes',
            description: 'Has parcels'
        },
        {
            icon: 'close',
            label: 'No',
            value: 'no',
            description: 'Does not have parcels'
        }
    ]

    //For expanding/collapsing filters on mobile
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleFilter = () => {
        setIsExpanded(!isExpanded)
    }

    const resetFilter = () => {
        setFleetSearchQuery('')
        setFleetSearchOnlineStatus('all')
    }

    return (
        <>
            <div className={`${Styles.filterHolder} ${isExpanded ? Styles.expanded : Styles.collapsed}`}>
                <div className={`${Styles.item} ${GlobalStyles.w25perc} ${isExpanded ? GlobalStyles.fullWidthOnMobile : GlobalStyles.hideOnMobile}`}>
                    <span className={`${Styles.label} ${GlobalStyles.hideOnMobile}`}>Search Query</span>
                    <input className={`${Styles.textInput}`} type="text" value={fleetSearchQuery} onChange={e => { setFleetSearchQuery(e.target.value) }} />
                </div>
                <div className={`${Styles.item} ${GlobalStyles.w25perc} ${isExpanded ? GlobalStyles.fullWidthOnMobile : GlobalStyles.hideOnMobile}`}>
                    <span className={`${Styles.label}`}>Online Status</span>
                    <DropdownSelector
                        selected={retrieveObject(dropdownList_onlineStatus, 'value', fleetSearchOnlineStatus, true)}
                        items={dropdownList_onlineStatus}
                        onChangeHandler={setFleetSearchOnlineStatus}
                    />
                </div>
                <div className={`${Styles.item} ${GlobalStyles.w25perc}  ${isExpanded ? GlobalStyles.fullWidthOnMobile : GlobalStyles.hideOnMobile}`}>
                    <span className={`${Styles.label}`}>Model</span>
                    <DropdownSelector
                        selected={dropdownList_model[0]}
                        items={dropdownList_model}
                        onChangeHandler={setFleetSearchModel}
                    />
                </div>
                <div className={`${Styles.item} ${GlobalStyles.w12p5perc}  ${isExpanded ? GlobalStyles.fullWidthOnMobile : GlobalStyles.hideOnMobile}`}>
                    <span className={`${Styles.label}`}>Notifications</span>
                    <DropdownSelector
                        selected={dropdownList_hasParcels[1]}
                        items={dropdownList_hasParcels}
                    />
                </div>
                <div className={`${Styles.ctaHolder} ${GlobalStyles.w100perc}  ${GlobalStyles.hideOnTab} ${GlobalStyles.hideOnDesktop}`}>
                    <button className={`${Styles.secondaryCTA}`} onClick={resetFilter}>
                        <GoogleIcon iconName={'filter_alt_off'} style={{ color: '#111' }} />
                        <span className={`${Styles.label}`}>Reset filter</span>
                    </button>
                    <button className={`${Styles.primaryCTA}`} onClick={toggleFilter}>
                        <GoogleIcon iconName={!isExpanded ? 'filter_alt' : 'check_circle'} style={{ color: '#eee' }} />
                        <span className={`${Styles.label}`}>{!isExpanded ? 'Filter' : 'DONE'}</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default FleetSearch

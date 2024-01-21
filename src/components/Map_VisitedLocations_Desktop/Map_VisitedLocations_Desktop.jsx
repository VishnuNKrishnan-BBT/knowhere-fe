import React from 'react'
import GlobalStyles from '../../global.module.css'
import Styles from './Map_VisitedLocations_Desktop.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import Calendar from '../Calendar/Calendar'
import VisitedLocationItem from './VisitedLocationItem'
import MiniJourneyDetails from '../MiniJourneyDetails/MiniJourneyDetails'
import { useMainContext } from '../../contexts/MainContext'
import { getMonthName } from '../Calendar/Helpers'

function Map_VisitedLocations_Desktop({ visitedLocations = [], view = 'locations', toggleView, activeOnMobile, toggleMobileLocationsPaneActive = null }) {

    const {
        selectedMonthIndex,
        selectedYear,
        monthIncrement,
        monthDecrement
    } = useMainContext()

    return (
        <div className={`${Styles.wrapper} ${activeOnMobile ? Styles.mobileActive : Styles.mobileInactive}`}>
            <div className={`${Styles.topBar}`}>
                <div className={`${Styles.dateNavBtn}`} onClick={monthDecrement}>
                    <GoogleIcon iconName={'arrow_back_ios_new'} style={{ color: '#eee' }} />
                </div>
                <div className={Styles.headingHolder} onClick={toggleView}>
                    <p className={`${Styles.day}`}>{view == 'locations' && 'Tuesday'}{view == 'calendar' && getMonthName(selectedMonthIndex).long.toUpperCase()}</p>
                    <p className={`${Styles.date}`}>{view == 'locations' && `21-${selectedMonthIndex + 1}-${selectedYear}`}{view == 'calendar' && selectedYear}</p>
                </div>
                <div className={`${Styles.dateNavBtn}`} onClick={monthIncrement}>
                    <GoogleIcon iconName={'arrow_forward_ios'} style={{ color: '#eee' }} />
                </div>
            </div>
            {view == 'locations' &&
                <div className={`${Styles.itemsHolder}`}>
                    {
                        visitedLocations.length > 0 && visitedLocations.map((obj, key) => {
                            return <VisitedLocationItem
                                timestamp={obj.timestamp}
                                locationMain={obj.locationMain}
                                locationSub={obj.locationSub}
                                isLast={key == visitedLocations.length - 1 || (visitedLocations[key + 1] !== undefined && visitedLocations[key + 1].newLeg)}
                                key={key}
                            />
                        })
                    }
                    <div className={`${GlobalStyles.hideOnDesktop} ${GlobalStyles.hideOnTab} ${Styles.spacer}`}></div>
                    <div className={`${GlobalStyles.hideOnDesktop} ${GlobalStyles.hideOnTab} ${Styles.closeCtaWrapper}`}>
                        <div className={`${Styles.closeCta} ${Styles.primaryCtaBG}`} onClick={toggleView}>
                            <span className={`${Styles.closeLabel}`}><GoogleIcon iconName={'query_stats'} style={{ transform: 'translateY(6px)', marginRight: '5px' }} />ANALYZE</span>
                        </div>
                        <div className={`${Styles.closeCta} ${Styles.secondaryCtaBG}`} onClick={toggleMobileLocationsPaneActive}>
                            <span className={`${Styles.closeLabel}`}><GoogleIcon iconName={'cancel'} style={{ transform: 'translateY(6px)', marginRight: '5px' }} />CLOSE</span>
                        </div>
                    </div>
                </div>}
            {view == 'calendar' &&
                <>
                    <Calendar
                        monthIndex={3}
                        monthBar={false}
                    />
                    <MiniJourneyDetails />
                </>
            }


        </div>
    )
}

export default Map_VisitedLocations_Desktop

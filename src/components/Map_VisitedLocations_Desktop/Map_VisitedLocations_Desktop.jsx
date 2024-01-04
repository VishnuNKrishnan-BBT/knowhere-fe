import React from 'react'
import Styles from './Map_VisitedLocations_Desktop.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import Calendar from '../Calendar/Calendar'
import VisitedLocationItem from './VisitedLocationItem'
import MiniJourneyDetails from '../MiniJourneyDetails/MiniJourneyDetails'

function Map_VisitedLocations_Desktop({ view = 'locations', toggleView }) {


    const locations = [
        {
            timestamp: '13:10',
            locationMain: 'Al Majaz',
            locationSub: 'Corniche Street, Sharjah'
        },
        {
            timestamp: '13:30',
            locationMain: 'Al Nahda',
            locationSub: 'Al Wadha Street, Sharjah'
        },
        {
            timestamp: '13:40',
            locationMain: 'Al Mamzar',
            locationSub: 'Al Ittihad Street'
        },
        {
            timestamp: '13:50',
            locationMain: 'Dubai International Airport',
            locationSub: 'Al Ittihad Street'
        }
    ]

    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.topBar}`}>
                <div className={`${Styles.dateNavBtn}`}>
                    <GoogleIcon iconName={'arrow_back_ios_new'} style={{ color: '#eee' }} />
                </div>
                <div className={Styles.headingHolder} onClick={toggleView}>
                    <p className={`${Styles.day}`}>{view == 'locations' && 'Tuesday'}{view == 'calendar' && 'December'}</p>
                    <p className={`${Styles.date}`}>{view == 'locations' && '21-11-2023'}{view == 'calendar' && '2023'}</p>
                </div>
                <div className={`${Styles.dateNavBtn}`}>
                    <GoogleIcon iconName={'arrow_forward_ios'} style={{ color: '#eee' }} />
                </div>
            </div>
            {view == 'locations' &&
                <div className={`${Styles.itemsHolder}`}>
                    {
                        locations.map((obj, key) => {
                            return <VisitedLocationItem
                                timestamp={obj.timestamp}
                                locationMain={obj.locationMain}
                                locationSub={obj.locationSub}
                                isLast={key == locations.length - 1}
                            />
                        })
                    }
                </div>}
            {view == 'calendar' &&
                <Calendar
                    monthIndex={3}
                    monthBar={false}
                />}

            <MiniJourneyDetails />
        </div>
    )
}

export default Map_VisitedLocations_Desktop

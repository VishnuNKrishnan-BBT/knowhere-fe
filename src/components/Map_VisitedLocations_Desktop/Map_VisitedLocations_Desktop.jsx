import React from 'react'
import Styles from './Map_VisitedLocations_Desktop.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import Calendar from '../Calendar/Calendar'
import VisitedLocationItem from './VisitedLocationItem'
import MiniJourneyDetails from '../MiniJourneyDetails/MiniJourneyDetails'

function Map_VisitedLocations_Desktop({ view = 'locations', toggleView }) {
    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.topBar}`}>
                <div className={`${Styles.dateNavBtn}`}>
                    <GoogleIcon iconName={'arrow_back_ios_new'} style={{ color: '#eee' }} />
                </div>
                <div onClick={toggleView}>
                    <p className={`${Styles.day}`}>Tuesday</p>
                    <p className={`${Styles.date}`}>21-11-2023</p>
                </div>
                <div className={`${Styles.dateNavBtn}`}>
                    <GoogleIcon iconName={'arrow_forward_ios'} style={{ color: '#eee' }} />
                </div>
            </div>
            {view == 'locations' &&
                <div className={`${Styles.itemsHolder}`}>
                    <VisitedLocationItem
                        locationMain={'Al Majaz'}
                        locationSub={'E44, Dubai Hatta Road'}
                    />
                    <VisitedLocationItem
                        locationMain={'Al Nahda'}
                        locationSub={'E44, Dubai Hatta Road'}
                    />
                    <VisitedLocationItem
                        locationMain={'Al Mamzar'}
                        locationSub={'E44, Dubai Hatta Road'}
                    />
                    <VisitedLocationItem
                        locationMain={'Dubai International Airport'}
                        locationSub={'E44, Dubai Hatta Road'}
                    />
                    <VisitedLocationItem
                        locationMain={'Garhoud'}
                        locationSub={'E44, Dubai Hatta Road'}
                    />
                    <VisitedLocationItem
                        locationMain={'World Trade Centre'}
                        locationSub={'E44, Dubai Hatta Road'}
                    />
                    <VisitedLocationItem
                        locationMain={'Business Bay'}
                        locationSub={'E44, Dubai Hatta Road'}
                    />
                    <VisitedLocationItem
                        locationMain={'Al Qouz'}
                        locationSub={'E44, Dubai Hatta Road'}
                    />
                    <VisitedLocationItem
                        locationMain={'Umm Sequeim'}
                        locationSub={'E44, Dubai Hatta Road'}
                    />
                    <VisitedLocationItem
                        locationMain={'Al Barsha'}
                        locationSub={'E44, Dubai Hatta Road'}
                        isLast
                    />
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

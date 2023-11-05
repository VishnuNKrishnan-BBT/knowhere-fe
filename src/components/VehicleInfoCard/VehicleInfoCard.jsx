import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GlobalStyles from '../../global.module.css'
import Styles from './VehicleInfoCard.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import OnlineStatusIndicator from '../OnlineStatusIndicator/OnlineStatusIndicator'
import { useMainContext } from '../../contexts/MainContext'

function VehicleInfoCard({ ...props }) {

    // Import context
    const { setCurrentVehicle } = useMainContext()

    // Navigate function initialization
    const navigate = useNavigate()

    const getIconStyle = type => {
        var returnValue = Styles.infoIcon //Default

        if (type == 'info') {
            returnValue = Styles.infoIcon
        } else if (type == 'warning') {
            returnValue = Styles.warningIcon
        }

        return returnValue
    }

    // Set vehicle to context and navigate to /about page
    const onCardClick = () => {
        setCurrentVehicle(props.details.vehicleId)
        navigate('/track/about')
    }

    // Set vehicle to context and navigate to /assignUser page
    const onAssignClick = e => {
        e.stopPropagation()
        setCurrentVehicle(props.details.vehicleId)
        navigate('/assignUser')
    }

    // Set vehicle to context and navigate to /track page
    const onTrackClick = e => {
        e.stopPropagation()
        setCurrentVehicle(props.details.vehicleId)
        navigate('/track/birdseye')
    }

    return (
        <>
            <div className={`${Styles.card}`} style={{ animationDelay: `${props.key * 0.25}s` }} onClick={onCardClick}>
                <div className={`${Styles.licensePlateHolder}`}>
                    <OnlineStatusIndicator status={props.details.onlineStatus} /><p className={`${Styles.licensePlateNumber} ${GlobalStyles.ml5px}`}>{props.details.licensePlate}</p>
                </div>
                <p className={`${Styles.carModel}`}>{props.details.model}</p>
                <p className={`${Styles.driverName}`}>{props.details.driver}</p>
                <div className={`${Styles.infoIconsHolder}`}>
                    {
                        !props.details.iotSim.activated ? (
                            <div className={`${Styles.infoIconHolder} ${Styles.warningIcon}`}>
                                <GoogleIcon iconName={'cloud_off'} style={{ fontWeight: 200 }} />
                            </div>
                        )
                            :
                            (
                                <div className={`${Styles.infoIconHolder} ${Styles.infoIcon}`}>
                                    <GoogleIcon iconName={'cloud_done'} style={{ fontWeight: 200 }} />
                                </div>
                            )
                    }
                    {
                        !!props.details.infoIcons &&
                        props.details.infoIcons.length > 0 &&
                        props.details.infoIcons.map((obj, key) => {
                            return (
                                <div key={key} className={`${Styles.infoIconHolder} ${getIconStyle(obj.type)}`}>
                                    <GoogleIcon iconName={obj.icon} style={{ fontWeight: 200 }} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`${Styles.photoHolder}`} style={{ backgroundImage: `url(${props.details.photo})` }}></div>
                <div className={`${Styles.ctaHolder}`}>

                    {/* Assign/Unassign button - Conditionally renderred */}
                    {props.details.assigned ?
                        <button className={`${Styles.secondaryCta} ${Styles.w49perc}`}>
                            <GoogleIcon iconName={'person_remove'} style={{ fontWeight: '200px', fontSize: '16px' }} />
                            <span className={`${GlobalStyles.ml5px}`}>Unassign</span>
                        </button>
                        :
                        <button className={`${Styles.secondaryCta} ${Styles.w49perc}`} onClick={e => { onAssignClick(e) }}>
                            <GoogleIcon iconName={'person_add'} style={{ fontWeight: '200px', fontSize: '16px' }} />
                            <span className={`${GlobalStyles.ml5px}`}>Assign</span>
                        </button>
                    }


                    <button className={`${Styles.primaryCta} ${Styles.w49perc}`} onClick={e => { onTrackClick(e) }}>
                        <GoogleIcon iconName={'share_location'} style={{ fontWeight: '200px', fontSize: '16px', color: '#eee' }} />
                        <span className={`${Styles.ctaLabel} ${GlobalStyles.ml5px}`}>TRACK</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default VehicleInfoCard

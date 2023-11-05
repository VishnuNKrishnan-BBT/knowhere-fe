import React from 'react'
import Styles from './OnlineStatusIndicator.module.css'

function OnlineStatusIndicator({ ...props }) {

    const getStatusStyle = status => {
        var returnValue = Styles.connecting

        if (status == 'connecting') {
            returnValue = Styles.connecting
        } else if (status == 'online') {
            returnValue = Styles.online
        } else if (status == 'offline') {
            returnValue = Styles.offline
        }

        return returnValue
    }

    return (
        <div className={`${Styles.onlineStatusIndicator} ${getStatusStyle(props.status)}`}></div>
    )
}

export default OnlineStatusIndicator

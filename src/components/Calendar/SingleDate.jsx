import React from 'react'
import Styles from './Calendar.module.css'

function SingleDate({ date = null, active = false }) {
    return (
        <p className={`${Styles.gridItem} ${active && Styles.activeDate}`}>{!!date && date}</p>
    )
}

export default SingleDate

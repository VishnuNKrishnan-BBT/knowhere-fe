import React, { useEffect, useState } from 'react'
import Styles from './Calendar.module.css'
import SingleDate from './SingleDate'
import { useMainContext } from '../../contexts/MainContext'
import { getDaysInMonth, getMonthName } from './Helpers'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function Calendar({ monthIndex = 1, monthBar = true }) {

    const {
        selectedMonthIndex,
        selectedYear,
        monthIncrement,
        monthDecrement
    } = useMainContext()

    const [daysInSelectedMonth, setDaysInSelectedMonth] = useState(getDaysInMonth(selectedYear, selectedMonthIndex))
    const [blankTileArray, setBlankTileArray] = useState([])

    useEffect(() => {
        setDaysInSelectedMonth(getDaysInMonth(selectedYear, selectedMonthIndex))
    }, [selectedMonthIndex, selectedYear])

    useEffect(() => {
        var newBlankTileArray = []
        const firstDayIndex = getDaysInMonth(selectedYear, selectedMonthIndex)[0].dayIndex - 1
        for (var i = 0; i <= firstDayIndex; i++) {
            newBlankTileArray.push('blank')
        }
        setBlankTileArray(newBlankTileArray)
    }, [selectedMonthIndex, selectedYear])

    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.holder}`}>
                {monthBar &&
                    <div className={`${Styles.monthName}`}>
                        <GoogleIcon iconName={'arrow_back_ios_new'} onClick={monthIncrement} />
                        <p>{getMonthName(selectedMonthIndex).long.toUpperCase()}</p>
                        <GoogleIcon iconName={'arrow_forward_ios'} onClick={monthDecrement} />
                    </div>}

                <p className={`${Styles.gridHeadings}`}>S</p>
                <p className={`${Styles.gridHeadings}`}>M</p>
                <p className={`${Styles.gridHeadings}`}>T</p>
                <p className={`${Styles.gridHeadings}`}>W</p>
                <p className={`${Styles.gridHeadings}`}>T</p>
                <p className={`${Styles.gridHeadings}`}>F</p>
                <p className={`${Styles.gridHeadings}`}>S</p>

                {blankTileArray.map((obj, key) => {
                    return <SingleDate date={null} key={key} />
                })}

                {daysInSelectedMonth.map((date, key) => {
                    return <SingleDate date={date.date} key={key} />
                })}
            </div>
        </div>
    )
}

export default Calendar

import React, { useEffect, useState } from 'react'
import Styles from './Calendar.module.css'
import SingleDate from './SingleDate'
import { getDaysInMonth, getMonthName } from './Helpers'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function Calendar({ monthIndex = 1, monthBar = true }) {

    const initialMonthName = getMonthName(monthIndex).long
    const [monthName, setMonthName] = useState(initialMonthName)

    return (
        <div className={`${Styles.wrapper}`}>
            {monthBar &&
                <div className={`${Styles.monthName}`}>
                    <GoogleIcon iconName={'arrow_back_ios_new'} />
                    <p>{monthName}</p>
                    <GoogleIcon iconName={'arrow_forward_ios'} />
                </div>}

            <p className={`${Styles.gridHeadings}`}>M</p>
            <p className={`${Styles.gridHeadings}`}>T</p>
            <p className={`${Styles.gridHeadings}`}>W</p>
            <p className={`${Styles.gridHeadings}`}>T</p>
            <p className={`${Styles.gridHeadings}`}>F</p>
            <p className={`${Styles.gridHeadings}`}>S</p>
            <p className={`${Styles.gridHeadings}`}>S</p>

            {/* WEEK 1 */}
            <SingleDate date={27} />
            <SingleDate date={28} />
            <SingleDate date={29} />
            <SingleDate date={30} />
            <SingleDate date={1} />
            <SingleDate date={2} />
            <SingleDate date={3} />


            {/* WEEK 2 */}
            <SingleDate date={4} />
            <SingleDate date={5} />
            <SingleDate date={6} />
            <SingleDate date={7} />
            <SingleDate date={8} active />
            <SingleDate date={9} />
            <SingleDate date={10} />

            {/* WEEK 3 */}
            <p className={`${Styles.gridItem}`}>11</p>
            <p className={`${Styles.gridItem}`}>12</p>
            <p className={`${Styles.gridItem}`}>13</p>
            <p className={`${Styles.gridItem}`}>14</p>
            <p className={`${Styles.gridItem}`}>15</p>
            <p className={`${Styles.gridItem}`}>16</p>
            <p className={`${Styles.gridItem}`}>17</p>

            {/* WEEK 4 */}
            <p className={`${Styles.gridItem}`}>18</p>
            <p className={`${Styles.gridItem}`}>19</p>
            <p className={`${Styles.gridItem}`}>20</p>
            <p className={`${Styles.gridItem}`}>21</p>
            <p className={`${Styles.gridItem}`}>22</p>
            <p className={`${Styles.gridItem}`}>23</p>
            <p className={`${Styles.gridItem}`}>24</p>

            {/* WEEK 5 */}
            <p className={`${Styles.gridItem}`}>25</p>
            <p className={`${Styles.gridItem}`}>26</p>
            <p className={`${Styles.gridItem}`}>27</p>
            <p className={`${Styles.gridItem}`}>28</p>
            <p className={`${Styles.gridItem}`}>29</p>
            <p className={`${Styles.gridItem}`}>30</p>
            <p className={`${Styles.gridItem}`}>31</p>
        </div>
    )
}

export default Calendar

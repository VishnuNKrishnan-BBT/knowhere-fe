import React from 'react'
import Styles from './PageContent_Analytics.module.css'
import NumberDescriptionCard from '../NumberDescriptionCard/NumberDescriptionCard'
import LineChartCard from '../LineChartCard/LineChartCard'

function PageContent_Analytics() {
    return (
        <>
            <div className={`${Styles.content}`}>
                <div className={`${Styles.numberCardsHolder}`}>
                    <NumberDescriptionCard
                        mainText={45}
                        icon={'directions_car'}
                        description={'Vehicles in transit'}
                    />
                    <NumberDescriptionCard
                        mainText={'62 / 125'}
                        icon={'account_circle'}
                        description={'Vehicles assigned'}
                    />
                    <NumberDescriptionCard
                        mainText={210}
                        style={{ color: 'red' }}
                        icon={'warning'}
                        description={'Violations detected'}
                    />
                    <NumberDescriptionCard
                        mainText={'112'}
                        icon={'quick_reference'}
                        description={'Documents expiring in a month'}
                    />
                    <LineChartCard />
                </div>
            </div>
        </>
    )
}

export default PageContent_Analytics

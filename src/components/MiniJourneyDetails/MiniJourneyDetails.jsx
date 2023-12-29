import React from 'react'
import Styles from './MiniJourneyDetails.module.css'
import Card from './Card'
import Graph from './Graph'

function MiniJourneyDetails() {
    return (
        <div className={`${Styles.wrapper}`}>
            <Card
                label={'Travelled'}
                data={132}
                unit={'kms'}
                iconName={'route'}
            />

            <Card
                label={'Legs'}
                data={7}
                iconName={'airline_stops'}
            />

            <Card
                label={'Max. Speed'}
                data={143}
                unit={'km/h'}
                iconName={'speed'}
            />

            <Card
                label={'Overspeeding'}
                data={3}
                unit={'instances'}
                iconName={'gavel'}
            />

            <Card
                label={'Avg. Speed'}
                data={66}
                unit={'km/h'}
                iconName={'avg_pace'}
            />

            <Card
                label={'Idleing Time'}
                data={143}
                unit={'minutes'}
                iconName={'autostop'}
            />

            <Graph
                fullWidth
            />
        </div>
    )
}

export default MiniJourneyDetails

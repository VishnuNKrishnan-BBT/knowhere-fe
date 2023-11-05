import React from 'react'
import Styles from './MultiStepIndicator.module.css'

function MultiStepIndicator({ ...props }) {

    return (
        <>
            <div className={`${Styles.indicatorHolder}`}>
                {
                    props.steps.map((obj, key) => {
                        return (
                            <div key={key} className={`${Styles.stepInfoHolder} ${key == props.activeStage - 1 ? Styles.active : Styles.inactive}`}>
                                <span className={`${Styles.text}`}>{key == props.activeStage - 1 ? `${obj.id}: ${obj.title}` : `${obj.id}`}</span>
                                {/* ${obj.id}: ${obj.title} */}
                            </div>
                        )
                    })
                }
            </div>
            <div className={`${Styles.rail}`}></div>
        </>
    )
}

export default MultiStepIndicator

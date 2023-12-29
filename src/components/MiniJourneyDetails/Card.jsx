import React from 'react'
import Styles from './MiniJourneyDetails.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function card({
    label = '',
    data = '',
    unit = '',
    color = '',
    iconName = null,
    fullWidth = false,
    chart = false
}) {
    return (
        <div className={`${Styles.item} ${fullWidth && Styles.fullWidth}`}>
            <div className={`${Styles.dataHolder}`}>
                <p className={`${Styles.data}`}>{data}</p>
                {unit !== '' &&
                    <p className={Styles.unit}> {unit}</p>
                }
            </div>

            <div className={`${Styles.labelHolder}`}>
                {!!iconName && <GoogleIcon iconName={iconName} style={{ color: '#666', fontSize: '16px', marginRight: '2px' }} />}
                <p className={`${Styles.label}`}>{label}</p>
            </div>
        </div>
    )
}

export default card

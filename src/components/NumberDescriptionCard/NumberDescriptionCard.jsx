import React from 'react'
import Styles from './NumberDescriptionCard.module.css'
import GlobalStyles from '../../global.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function NumberDescriptionCard({ ...props }) {
    return (
        <div className={`${Styles.card}`}>
            <div className={`${Styles.writeUpHolder}`}>
                <h2 className={`${Styles.mainText}`}>{props.mainText}</h2>
                <span className={`${Styles.description}`}>{props.icon && <GoogleIcon iconName={props.icon} style={{ transform: 'translateY(5px)', fontWeight: 400, marginRight: '5px', fontSize: '20px' }} />}{props.description}</span>
            </div>
        </div>
    )
}

export default NumberDescriptionCard

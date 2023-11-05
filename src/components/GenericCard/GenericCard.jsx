import React from 'react'
import Styles from './GenericCards.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function GenericCard({ ...props }) {
    return (
        <>
            <div className={`${props.isTitle ? Styles.sectionTitleCard : Styles.card}`} style={props.style ? props.style : null}>
                {props.icon && <GoogleIcon iconName={props.icon} style={{ transform: 'translateY(5px)' }} />}
                <span className={`${props.isTitle ? Styles.sectionTitle : Styles.title}`} style={props.icon ? { marginLeft: '5px' } : null}>{props.title}</span>
                <p className={`${Styles.content}`}>{props.content}</p>
            </div>
        </>
    )
}

export default GenericCard

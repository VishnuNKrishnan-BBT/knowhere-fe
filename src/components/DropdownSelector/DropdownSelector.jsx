import React, { useEffect, useState } from 'react'
import GlobalStyles from '../../global.module.css'
import Styles from './DropdownSelector.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import { logger } from '../../utils/utils'

function DropdownSelector({ ...props }) {

    const selectorId = `selector_${Date.now()}`

    const dropdownList = !!props.items.length ? props.items : []

    const [isExpanded, setIsExpanded] = useState(false)
    const [selectedValue, setSelectedValue] = useState(props.selected.label)

    const toggleDropdown = () => {
        setIsExpanded(!isExpanded)
    }

    const handleItemClick = item => {
        setSelectedValue(item.label)
        if (props.onChangeHandler) {
            props.onChangeHandler(item.value)
        }
        setIsExpanded(false)
    }

    // Dynamically equalize dropdown width with that of parent holder
    const [dropdownWidth, setDropdownWidth] = useState('0px')
    useEffect(() => {
        const width = getComputedStyle(document.getElementById(selectorId)).width
        setDropdownWidth(width)
    }, [])

    return (
        <>
            <div className={`${Styles.valueHolder}`} onClick={toggleDropdown} id={selectorId} style={props.style ? props.style : {}}>
                <div className={`${Styles.activeValueLabelHolder}`}>
                    <span className={`${Styles.activeValueLabel}`}>{selectedValue}</span>
                </div>
                <div className={`${Styles.dropdownIconHolder}`}>
                    <GoogleIcon iconName={'expand_more'} />
                </div>
            </div>
            <div className={`${Styles.dropdownHolder} ${isExpanded ? Styles.expanded : Styles.collapsed}`} style={{ width: dropdownWidth }}>
                {
                    dropdownList.map((obj, key) => {
                        return (
                            <div className={`${Styles.item}`} key={key} onClick={() => { handleItemClick(obj) }}>
                                <GoogleIcon iconName={obj.icon} style={{ color: '#eee' }} />
                                <span className={`${Styles.dropdownItemLabel} ${GlobalStyles.ml5px}`}>{obj.label}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default DropdownSelector

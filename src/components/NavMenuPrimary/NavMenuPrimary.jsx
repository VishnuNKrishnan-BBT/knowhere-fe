import React, { useEffect, useState } from 'react'
import GlobalStyles from '../../global.module.css'
import Styles from './NavMenuPrimary.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import { Link } from 'react-router-dom'
import { getActiveItemIndexOnLoad } from './helpers'

function NavMenuPrimary() {

    const [activeMenuItem, setActiveMenuItem] = useState(getActiveItemIndexOnLoad())
    const [activeMenuUnderlineStyle, setActiveMenuUnderlineStyle] = useState(Styles.activateItem1)

    useEffect(() => {
        if (activeMenuItem == 1) {
            setActiveMenuUnderlineStyle(Styles.activateItem1)
        } else if (activeMenuItem == 2) {
            setActiveMenuUnderlineStyle(Styles.activateItem2)
        } else if (activeMenuItem == 3) {
            setActiveMenuUnderlineStyle(Styles.activateItem3)
        } else if (activeMenuItem == 4) {
            setActiveMenuUnderlineStyle(Styles.activateItem4)
        } else if (activeMenuItem == 5) {
            setActiveMenuUnderlineStyle(Styles.activateItem5)
        }
    }, [activeMenuItem])

    return (
        <div className={`${Styles.topBarContainer} ${GlobalStyles.hideOnMobile}`}>
            <div className={`${Styles.brandLogoHolder}`}>
                {/* <img className={`${Styles.brandLogo}`} src={'https://res.cloudinary.com/dqh32m4vp/image/upload/v1695988241/knoWhere/knowhereLogoGrey_qvwx1n.png'} alt="knoWhere" /> */}
                <p className={`${Styles.brandName}`}>knoWhere</p>
            </div>
            <div className={`${Styles.topMenuHolder}`}>
                {/* Menu Item */}
                <Link to={'/track'}>
                    <div className={`${Styles.item}`} onClick={() => { setActiveMenuItem(1) }}>
                        <GoogleIcon iconName={'share_location'} style={{ color: '#eee' }} />
                        <span className={`${GlobalStyles.ml5px} ${Styles.itemLabel}`}>Track</span>
                    </div>
                </Link>

                <Link to={'/favourites'}>
                    {/* Menu Item */}
                    <div className={`${Styles.item}`} onClick={() => { setActiveMenuItem(2) }}>
                        <GoogleIcon iconName={'star'} style={{ color: '#eee' }} />
                        <span className={`${GlobalStyles.ml5px} ${Styles.itemLabel}`}>Favourites</span>
                    </div>
                </Link>

                {/* Menu Item */}
                <Link to={'/analytics'}>
                    <div className={`${Styles.item}`} onClick={() => { setActiveMenuItem(3) }}>
                        <GoogleIcon iconName={'monitoring'} style={{ color: '#eee' }} />
                        <span className={`${GlobalStyles.ml5px} ${Styles.itemLabel}`}>Analytics</span>
                    </div>
                </Link>

                {/* Menu Item */}
                <Link to={'/search'}>
                    <div className={`${Styles.item}`} onClick={() => { setActiveMenuItem(4) }}>
                        <GoogleIcon iconName={'manage_search'} style={{ color: '#eee' }} />
                        <span className={`${GlobalStyles.ml5px} ${Styles.itemLabel}`}>Search</span>
                    </div>
                </Link>

                {/* Menu Item */}
                <Link to={'/settings'}>
                    <div className={`${Styles.item}`} onClick={() => { setActiveMenuItem(5) }}>
                        <GoogleIcon iconName={'settings'} style={{ color: '#eee' }} />
                        <span className={`${GlobalStyles.ml5px} ${Styles.itemLabel}`}>Settings</span>
                    </div>
                </Link>

                {/* Active Item Underline */}
                <div className={`${Styles.activeItemUnderline} ${activeMenuUnderlineStyle}`}></div>
            </div>
            <div className={`${Styles.accountMenuHolder}`}>
                <GoogleIcon iconName={'account_circle'} style={{ color: '#eee' }} />
            </div>
        </div>
    )
}

export default NavMenuPrimary

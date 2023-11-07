import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GlobalStyles from '../../global.module.css'
import Styles from './PageContentWrapper.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function PageContentWrapper({ ...props }) {

    const navigate = useNavigate()

    const navigateBack = () => {
        if (props?.backLink == undefined) {
            return
        } else {
            navigate(props.backLink)
        }
    }
    return (
        <div className={`${Styles.pageContentWrapper}`}>
            <div className={`${Styles.leftSideBar} ${GlobalStyles.hideOnMobile} ${GlobalStyles.hideOnTab}`}>
                {
                    !!props.sideBarItems?.length &&
                    props.sideBarItems?.length > 0 &&
                    props.sideBarItems.map((obj, key) => {
                        return (
                            <Link to={obj.link}>
                                <div className={`${Styles.item}`} key={key}>
                                    <GoogleIcon iconName={obj.googleIcon} style={{ color: "#111", fontWeight: 300 }} />
                                    <span className={`${Styles.itemLabel} ${GlobalStyles.ml5px}`}>{obj.title}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className={`${Styles.rightPanel}`}>
                <div className={`${Styles.contentHeadingHolder}`}>
                    {props.enableBackBtn && <div className={`${Styles.backBtn}`} onClick={navigateBack}>
                        <GoogleIcon iconName={'arrow_back_ios_new'} />
                    </div>}
                    <div>
                        {props.googleIcon && <GoogleIcon iconName={props.googleIcon} style={{ fontSize: "35px", transform: "translateY(5px)", fontWeight: 600 }} />}
                        <h1 className={`${Styles.pageTitle} ${props.icon ? GlobalStyles.ml5px : ''}`}>{props.pageTitle}</h1>
                        <p className={`${Styles.pageDescription}`}>{props.pageDescription ? props.pageDescription : 'Description'}</p>
                    </div>
                </div>
                <div className={`${Styles.content}`}>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default PageContentWrapper
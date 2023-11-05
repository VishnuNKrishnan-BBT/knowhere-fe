import React from 'react'
import Styles from './Settings.module.css'
import PageContentWrapper from '../../components/PageContentWrapper/PageContentWrapper'

function Settings() {

    const sideBarItems = [
        {
            title: 'Account',
            googleIcon: 'account_circle',
            link: ''
        },
        {
            title: 'Notifications',
            googleIcon: 'mark_email_unread',
            link: ''
        },
        {
            title: 'Billing',
            googleIcon: 'receipt_long',
            link: ''
        },
    ]

    return (
        <>
            <PageContentWrapper
                pageTitle={'Settings'}
                googleIcon={'settings'}
                pageDescription={'Manage your preferences here...'}
                sideBarItems={sideBarItems}
            />
        </>
    )
}

export default Settings

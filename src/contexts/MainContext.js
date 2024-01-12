import React, { createContext, useContext, useState } from 'react'
import { getToday, retrieveObject } from '../utils/utils';
import { getAllVehiclesList } from '../supportFunctions/getAllVehicleList';

// Create a new context
const MainContext = createContext();

// Create a ContextProvider component to provide context values
export function ContextProvider({ children }) {

    // --------------------------------------
    // INITIAL CONTEXT VALUES
    // --------------------------------------

    //Dropdown values
    // var fleetDetailsArray = [
    //     {
    //         licensePlate: 'DXB I 46209',
    //         model: 'Land Rover LR4',
    //         driver: 'Vishnu Navaneeth Krishnan',
    //         contactNo: '+971506738672',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'speed',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'DXB H 78790',
    //         model: 'Nissan Sunny',
    //         driver: 'John Swift',
    //         contactNo: '+971503728199',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'offline',
    //     },
    //     {
    //         licensePlate: 'SHJ 3 82910',
    //         model: 'Mitsubishi Pajero',
    //         driver: 'Hitesh Guddwani',
    //         contactNo: '+971567281992',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'package_2',
    //                 type: 'info'
    //             },
    //             {
    //                 icon: 'speed',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'DXB H 88990',
    //         model: 'Hyundai Accent',
    //         driver: 'Geevarghese Issac',
    //         contactNo: '+971549302991',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'speed',
    //                 type: 'info'
    //             },
    //             {
    //                 icon: 'event_busy',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'DXB H 78790',
    //         model: 'Nissan Sunny',
    //         driver: 'John Swift',
    //         contactNo: '+971503728199',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'offline',
    //         infoIcons: [
    //             {
    //                 icon: 'package_2',
    //                 type: 'info'
    //             },
    //             {
    //                 icon: 'warning',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'SHJ 3 10920',
    //         model: 'Lexus LX570',
    //         driver: 'Amrita Lakshmi Prakash',
    //         contactNo: '+971568392021',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'speed',
    //                 type: 'warning'
    //             },
    //             {
    //                 icon: 'event_busy',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'DXB I 46209',
    //         model: 'Land Rover LR4',
    //         driver: 'Vishnu Navaneeth Krishnan',
    //         contactNo: '+971506738672',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'package_2',
    //                 type: 'info'
    //             },
    //             {
    //                 icon: 'event_busy',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'DXB H 78790',
    //         model: 'Nissan Sunny',
    //         driver: 'John Swift',
    //         contactNo: '+971503728199',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'offline',
    //         infoIcons: [
    //             {
    //                 icon: 'package_2',
    //                 type: 'info'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'SHJ 3 82910',
    //         model: 'Mitsubishi Pajero',
    //         driver: 'Hitesh Guddwani',
    //         contactNo: '+971567281992',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'event_busy',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'DXB I 46209',
    //         model: 'Land Rover LR4',
    //         driver: 'Vishnu Navaneeth Krishnan',
    //         contactNo: '+971506738672',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'package_2',
    //                 type: 'info'
    //             },
    //             {
    //                 icon: 'warning',
    //                 type: 'warning'
    //             },
    //             {
    //                 icon: 'speed',
    //                 type: 'warning'
    //             },
    //             {
    //                 icon: 'event_busy',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'DXB H 78790',
    //         model: 'Nissan Sunny',
    //         driver: 'John Swift',
    //         contactNo: '+971503728199',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'offline',
    //         infoIcons: [
    //             {
    //                 icon: 'package_2',
    //                 type: 'info'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'SHJ 3 82910',
    //         model: 'Mitsubishi Pajero',
    //         driver: 'Hitesh Guddwani',
    //         contactNo: '+971567281992',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'package_2',
    //                 type: 'info'
    //             },
    //             {
    //                 icon: 'warning',
    //                 type: 'warning'
    //             },
    //             {
    //                 icon: 'speed',
    //                 type: 'warning'
    //             },
    //             {
    //                 icon: 'event_busy',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'DXB I 46209',
    //         model: 'Land Rover LR4',
    //         driver: 'Vishnu Navaneeth Krishnan',
    //         contactNo: '+971506738672',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'speed',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'DXB H 78790',
    //         model: 'Nissan Sunny',
    //         driver: 'John Swift',
    //         contactNo: '+971503728199',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'offline',
    //     },
    //     {
    //         licensePlate: 'SHJ 3 82910',
    //         model: 'Mitsubishi Pajero',
    //         driver: 'Hitesh Guddwani',
    //         contactNo: '+971567281992',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'package_2',
    //                 type: 'info'
    //             },
    //             {
    //                 icon: 'speed',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'DXB I 46209',
    //         model: 'Land Rover LR4',
    //         driver: 'Vishnu Navaneeth Krishnan',
    //         contactNo: '+971506738672',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'speed',
    //                 type: 'warning'
    //             }
    //         ]
    //     },
    //     {
    //         licensePlate: 'DXB H 78790',
    //         model: 'Nissan Sunny',
    //         driver: 'John Swift',
    //         contactNo: '+971503728199',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'offline',
    //     },
    //     {
    //         licensePlate: 'SHJ 3 82910',
    //         model: 'Mitsubishi Pajero',
    //         driver: 'Hitesh Guddwani',
    //         contactNo: '+971567281992',
    //         contactNoVerified: true,
    //         photo: '',
    //         onlineStatus: 'online',
    //         infoIcons: [
    //             {
    //                 icon: 'package_2',
    //                 type: 'info'
    //             },
    //             {
    //                 icon: 'speed',
    //                 type: 'warning'
    //             }
    //         ]
    //     }
    // ]

    const dropdownList_onlineStatus = [
        {
            icon: 'published_with_changes',
            label: 'All',
            value: 'all',
            description: 'All Options'
        },
        {
            icon: 'check',
            label: 'Online',
            value: 'online',
            description: 'Is currently online'
        },
        {
            icon: 'close',
            label: 'Offline',
            value: 'offline',
            description: 'Is currently offline'
        },
        {
            icon: 'history_toggle_off',
            label: 'Online in the last hour',
            value: 'lastHour',
            description: 'Has been online in the last 1 hour.'
        }
    ]

    const dropdownList_model = [
        {
            icon: 'published_with_changes',
            label: 'All',
            value: 'all',
            description: 'All Options'
        },
        {
            icon: 'directions_car',
            label: 'Land Rover LR4',
            value: 'Land Rover LR4',
            description: 'Land Rover LR4'
        },
        {
            icon: 'directions_car',
            label: 'Nissan Sunny',
            value: 'Nissan Sunny',
            description: 'Nissan Sunny'
        },
        {
            icon: 'directions_car',
            label: 'Honda',
            value: 'Honda',
            description: 'Honda'
        },
        {
            icon: 'directions_car',
            label: 'Toyota Yaris',
            value: 'Toyota Yaris',
            description: 'Toyota Yaris'
        },
        {
            icon: 'directions_car',
            label: 'Mitsubishi Pajero',
            value: 'Mitsubishi Pajero',
            description: 'Mitsubishi Pajero'
        },
        {
            icon: 'local_shipping',
            label: 'Toyota Hilux',
            value: 'Toyota Hilux',
            description: 'Toyota Hilux'
        },
    ]

    //Loading Status
    const [isLoading_pageContent, setIsLoading_pageContent] = useState(false)

    // Fleet details array - empty array, data will be filled via API call
    const [fleetDetailsArray, setFleetDetailsArray] = useState([])

    // Fleet search parameters
    const [fleetSearchQuery, setFleetSearchQuery] = useState('')
    const [fleetSearchOnlineStatus, setFleetSearchOnlineStatus] = useState('all')
    const [fleetSearchModel, setFleetSearchModel] = useState('all')

    // Selected vehicle parameters
    const [currentVehicle, setCurrentVehicle] = useState(null)

    //Selected date parameters
    const [selectedDate, setSelectedDate] = useState(null)


    const [selectedMonthIndex, setSelectedMonthIndex] = useState(getToday().month)
    const [selectedYear, setSelectedYear] = useState(getToday().year)

    const monthIncrement = () => {
        if (selectedMonthIndex == 11) {
            setSelectedMonthIndex(0)
            setSelectedYear(selectedYear + 1)
        } else {
            setSelectedMonthIndex(selectedMonthIndex + 1)
        }
    }

    const monthDecrement = () => {
        if (selectedMonthIndex == 0) {
            setSelectedMonthIndex(11)
            setSelectedYear(selectedYear - 1)
        } else {
            setSelectedMonthIndex(selectedMonthIndex - 1)
        }
    }

    // Passing values and functions into the context
    const contextValues = {
        isLoading_pageContent,
        setIsLoading_pageContent,
        fleetSearchQuery,
        setFleetSearchQuery,
        fleetDetailsArray, //Dropdown List
        setFleetDetailsArray,
        dropdownList_onlineStatus, //Dropdown List
        dropdownList_model, //Dropdown List
        fleetSearchModel,
        setFleetSearchModel,
        fleetSearchOnlineStatus,
        setFleetSearchOnlineStatus,
        currentVehicle,
        setCurrentVehicle,
        selectedDate,
        setSelectedDate,
        selectedMonthIndex,
        setSelectedMonthIndex,
        selectedYear,
        setSelectedYear,
        monthIncrement,
        monthDecrement
    }

    return (
        <MainContext.Provider value={contextValues}>
            {children}
        </MainContext.Provider>
    )
}

// Custom hook to easily access context values
export function useMainContext() {
    return useContext(MainContext)
}
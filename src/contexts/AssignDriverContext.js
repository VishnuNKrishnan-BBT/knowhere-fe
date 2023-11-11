import React, { createContext, useContext, useState } from 'react'

// Create a new context
const AssignDriver_Context = createContext()

// Create a ContextProvider component to provide context values
export function AssignDriver_ContextProvider({ children }) {

    //Initial State Values
    const [photoBase64, setPhotoBase64] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [diallingCode, setDiallingCode] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [emailId, setEmailId] = useState('')
    const [company, setCompany] = useState('')

    // Passing values and functions into the context
    const contextValues = {
        photoBase64,
        setPhotoBase64,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        diallingCode,
        setDiallingCode,
        mobileNumber,
        setMobileNumber,
        emailId,
        setEmailId,
        company,
        setCompany
    }

    return (
        <AssignDriver_Context.Provider value={contextValues}>
            {children}
        </AssignDriver_Context.Provider>
    )
}

// Custom hook to easily access context values
export function useAssignDriverContext() {
    return useContext(AssignDriver_Context)
}
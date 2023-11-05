import axios from "axios"

export const logger = (type, content) => {
    if (process.env.REACT_APP_DEBUG_LOGS == 'on') {
        if (type == 'log') {
            console.log(content)
        } else if (type == 'table') {
            console.table(content)
        } else if (type == 'warn') {
            console.warn(content)
        } else if (type == 'error') {
            console.error(content)
        }
    }
}

//Get an object from an array of objects where key == given value
export const retrieveObject = (array, key, value, returnSingleAsObject = false) => { //Set returnSingleAsObject = true when invoking if you expect an object as a result instead of an array. Applicable only in cases where the expected count of results is 1.
    const filteredArray = array.filter((item) => {
        // Check if the driver includes the keyword (case-insensitive)
        return item[key] === value
    })

    if (returnSingleAsObject) {
        logger('log', filteredArray[0])
        return filteredArray[0]
    } else {
        logger('log', filteredArray)
        return filteredArray
    }
}

//Hit Geolocation API and return response in the following format:
// {
// success: true,
// country: 'United Arab Emirates',
// dialingCode: '+971',
// city: 'Dubai',
// timezone: '+0400',
// countryCode: 'ae'
// }
export const getClientGeolocation = async () => { //Move this to server
    var returnObject = {
        success: false,
        country: null,
        dialingCode: null,
        city: null,
        countryCode: null,
        flagUrl: null
    }

    //Currently following IPAPI standard
    const apiUrl = `${process.env.REACT_APP_GEOLOCATION_BASE_URL}?access_key=${process.env.REACT_APP_GEOLOCATION_API_KEY}`

    axios.get(apiUrl)
        .then((res) => {
            returnObject.success = true
            returnObject.country = res.data.country_name
            returnObject.dialingCode = res.data.location.calling_code
            returnObject.city = res.data.city
            returnObject.countryCode = res.data.country_code
            returnObject.flagUrl = `https://assets.ipapi.com/flags/${res.data.country_code.toLowerCase()}.svg`

            //Set item to session storage
            sessionStorage.setItem('geolocation', JSON.stringify(returnObject))

            logger('log', `IPAPI Response: ${returnObject}`)
            return returnObject
        })
        .catch((error) => {
            returnObject.success = false
            logger('error', `IPAPI Error: ${error}`)
            return returnObject
        });
}
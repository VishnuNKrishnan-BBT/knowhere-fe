import { getWayPoints } from '../../supportFunctions/getWayPoints';

export const getPolylineConfig = (coords = []) => {
    return {
        type: "Feature",
        properties: {},
        geometry: {
            type: "LineString",
            coordinates: coords
        }
    }
}

export const getInitialPolylineCoords = async (startTimestamp = null, endTimestamp = null) => {

    const coords = await getWayPoints(startTimestamp, endTimestamp)
    return coords
}

export const addNewVisitedLocation = (existingList = [], newVisitedLocation = null, callback = null) => {
    if (callback == null || existingList == null || newVisitedLocation == null) {
        const errMessage = 'addNewVisitedLocation failed due to blank fields...'
        console.error(errMessage);
        return {
            status: 'fail',
            message: errMessage,
            data: null
        }
    }

    if (existingList.length > 0 && existingList[existingList.length - 1]?.uuid === newVisitedLocation.uuid) {
        const errMessage = 'addNewVisitedLocation ignored as received location is already updated.'
        console.log(errMessage);
        return {
            status: 'ignored',
            message: errMessage,
            data: null
        }
    }

    const modifiedList = existingList
    modifiedList.push(newVisitedLocation)

    callback(modifiedList)

    return {
        status: 'success',
        message: null,
        data: modifiedList
    }
}
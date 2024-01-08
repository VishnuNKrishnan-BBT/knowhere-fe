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
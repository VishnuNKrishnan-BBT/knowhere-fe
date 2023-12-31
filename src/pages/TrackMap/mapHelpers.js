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

export const getInitialPolylineCoords = async () => {

    const coords = await getWayPoints()
    return coords
}
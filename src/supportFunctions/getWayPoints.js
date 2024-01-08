import axios from "axios"
import { logger } from "../utils/utils"

export const getWayPoints = async (startTimestamp = null, endTimestamp = null) => {

    try {
        // Handle the response data as needed
        const response = await axios.get(`${process.env.REACT_APP_KNOWHERE_BACKEND_KW_MS_VEHICLE_DATA}/getWaypoints?start=${startTimestamp}&end=${endTimestamp}`, {
            headers: {
                'Authorization': 'your-secret-token'
            }
        })
        logger('table', (`getWayPoints`, response.data))

        return response.data.data
    } catch (error) {
        // Handle any errors that occurred during the request
        console.error(`Error: getVehicleDetails`, error)
    }
}
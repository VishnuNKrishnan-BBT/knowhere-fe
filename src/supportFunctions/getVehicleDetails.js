import axios from "axios"
import { logger } from "../utils/utils"

export const getVehicleDetails = async vehicleId => {

    const postData = {
        vehicleId: vehicleId,
    }

    try {
        // Handle the response data as needed
        const response = await axios.post(`${process.env.REACT_APP_KNOWHERE_BACKEND_HOST}/app/getVehicleDetails`, postData)
        logger('table', (`getVehicleDetails(${vehicleId})`, response.data))
        return response.data
    } catch (error) {
        // Handle any errors that occurred during the request
        console.error(`Error: getVehicleDetails(${vehicleId})`, error)
    }
}
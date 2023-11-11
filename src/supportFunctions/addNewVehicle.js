import axios from "axios"
import { logger } from "../utils/utils"

export const addNewVehicle = async vehicleDetails => {

    try {
        // Handle the response data as needed
        const response = await axios.post(`${process.env.REACT_APP_KW_MS_VEHICLEDATA_BE_HOST}/newVehicle`, vehicleDetails, {
            headers: { 'Authorization': 'your-secret-token' },
        })
        return response.data
    } catch (error) {
        // Handle any errors that occurred during the request
        console.error(`Error: addNewVehicle(${vehicleDetails.vehicleId})`, error)
    }
}
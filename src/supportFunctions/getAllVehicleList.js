import axios from "axios"
import { logger } from "../utils/utils"

export const getAllVehiclesList = async () => {

    const headers = {
        'Authorization': 'your-secret-token',
    }

    try {
        // Handle the response data as needed
        // logger('log', (`getAllVehiclesList(1212621 Hardcoded)`, response.data))
        const response = await axios.get(`${process.env.REACT_APP_KW_MS_VEHICLEDATA_BE_HOST}/allVehicles`, { headers })
        // const response = await axios.get(`http://127.0.0.1:4000/allVehicles`, { headers })
        logger('log', response?.data.data)
        return response.data.data
    } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error:', error)
        return null
    }
}
import axios from "axios"
import { logger } from "../utils/utils"

export const addNewAssignee = async assigneeDetails => {

    try {
        // Handle the response data as needed
        // const response = await axios.post(`${process.env.REACT_APP_KW_MS_VEHICLEDATA_BE_HOST}/newAssignee`, assigneeDetails, {
        const response = await axios.post(`http://127.0.0.1:4000/newAssignee`, assigneeDetails, {

            headers: { 'Authorization': 'your-secret-token' },
        })
        logger('log', response.data)
        return response.data
    } catch (error) {
        // Handle any errors that occurred during the request
        console.error(`Error: addNewAssignee(${assigneeDetails.firstName})`, error)
    }
}
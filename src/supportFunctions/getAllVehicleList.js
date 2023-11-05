import axios from "axios";
import { logger } from "../utils/utils";

export const getAllVehiclesList = async () => {

    const postData = {
        accountId: 1212621,
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    }

    try {
        // Handle the response data as needed
        // logger('log', (`getAllVehiclesList(1212621 Hardcoded)`, response.data));
        const response = await axios.post(`${process.env.REACT_APP_KNOWHERE_BACKEND_HOST}/app/getAllVehiclesDetails`, postData);
        return response.data
    } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
        return null
    }
};
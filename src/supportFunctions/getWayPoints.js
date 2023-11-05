import axios from "axios";
import { logger } from "../utils/utils";

export const getWayPoints = async vehicleId => {

    const postData = {
        journeyStartDate: Date.now() - (60 * 60 * 24 * 1000),
        journeyEndDate: Date.now(),
        vehicleId: vehicleId,
    }

    try {
        // Handle the response data as needed
        const response = await axios.post(`${process.env.REACT_APP_KNOWHERE_BACKEND_HOST}/app/getWayPoints`, postData);
        logger('table', (`getWayPoints(${vehicleId})`, response.data));
        return response.data
    } catch (error) {
        // Handle any errors that occurred during the request
        console.error(`Error: getVehicleDetails(${vehicleId})`, error);
    }
};
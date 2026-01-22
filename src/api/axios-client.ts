import axios from "axios";
import { axiosConfig } from "../config/axios";

const axiosClient = axios.create(axiosConfig);

axiosClient.interceptors.response.use(
    (error) => {
        console.log("Error: ", error);
        return Promise.reject(error);
    },
);

export default axiosClient;

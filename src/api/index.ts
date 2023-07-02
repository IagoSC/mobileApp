import axios from "axios";
import { config } from "../config";

export const api = axios.create({
    baseURL: config.serverApi,
    headers: {
        Authorization: "1936ebb0-e16b-4109-8825-c2bbd4cee14a"
    },
})
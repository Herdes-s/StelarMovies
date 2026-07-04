import axios from "axios";

export const apiMovi = axios.create({
    baseURL: "https://api.tvmaze.com",
    timeout: 10000,
})
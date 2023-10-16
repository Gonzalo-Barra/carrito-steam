import axios from "axios";

const apiURL = VITE_STEAMAPI;
export const getKets = () =>{
    return axios.get(apiURL);
}

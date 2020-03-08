import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    // replace with api from tiffany

    return axios.create({
        baseURL: "https://disney-parent-3.herokuapp.com/api",
        headers: {
            Authorization: token
        }
        
    })
};
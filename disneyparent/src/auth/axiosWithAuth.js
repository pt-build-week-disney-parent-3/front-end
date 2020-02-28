import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    // replace with api from tiffany

    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: token
        }
    })
};
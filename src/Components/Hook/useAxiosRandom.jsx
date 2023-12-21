import axios from "axios";

const axiosRandom = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAxiosRandom = () => {
    return axiosRandom;
};

export default useAxiosRandom;
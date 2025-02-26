import axios from "axios";

const axiosPublic = axios.create({
    baseURL : "https://y-wine-beta.vercel.app" , 
})

const useAxiosPublic = () => {
    return axiosPublic ;
};

export default useAxiosPublic;
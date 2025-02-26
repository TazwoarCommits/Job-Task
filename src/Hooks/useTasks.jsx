import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTasks = () => {
    const {user} = useContext(AuthContext) ;
    const axiosPublic = useAxiosPublic() ; 
    
    const {data : tasks=[] , refetch} = useQuery({
        queryKey: ["tasks", user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic(`/tasks/user?email=${user?.email}`)
            return data;
        }
    }) 

    return {tasks, refetch};
};

export default useTasks;
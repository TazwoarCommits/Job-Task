import { useContext } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../components/SectionTitle";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

const MyTasks = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["tasks", user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic(`/tasks/user?email=${user?.email}`)
            return data;
        }
    })

    const done = tasks.filter(task => task.category === "done");
    const inProgress = tasks.filter(task => task.category === "in-progress");
    const toDo = tasks.filter(task => task.category === "to-do");

    return (
        <div>
            <SectionTitle title="My Tasks"></SectionTitle>
            <div className="flex justify-center">
                <AddTask refetch={refetch}></AddTask>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                <div className="bg-red-100 rounded-xl pt-4">
                    <h2 className="text-center text-2xl md:text-4xl">To-Do</h2>
                    {toDo.length === 0 ? <h3 className="text-center text-xl md:text-3xl mb-4">No Data Found</h3> : toDo.map(task => <TaskCard task={task} refetch={refetch} key={task._id}></TaskCard>)}
                </div>
                <div className="bg-amber-100 rounded-xl pt-4">
                    <h2 className="text-center text-2xl md:text-4xl">In-Progress</h2>
                    {inProgress.length === 0 ? <h3 className="text-center text-xl md:text-3xl mb-4">No Data Found</h3> : inProgress.map(task => <TaskCard task={task} key={task._id}></TaskCard>)}
                </div>
                <div className="bg-emerald-100 rounded-xl pt-4">
                    <h2 className="text-center text-2xl md:text-4xl">Done</h2>
                    {done.length === 0 ? <h3 className="text-center text-xl md:text-3xl mb-4">No Data Found</h3> : done.map(task => <TaskCard task={task} key={task._id}></TaskCard>)}
                </div>
            </div>
        </div>
    );
};

export default MyTasks;
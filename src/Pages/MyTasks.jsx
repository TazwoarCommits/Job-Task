import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SectionTitle from './../components/SectionTitle';
import AddTask from "../components/AddTask";
import { format } from "date-fns";

const MyTasks = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const { data: tasks = [] } = useQuery({
        queryKey: ["tasks", user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic(`/tasks/user?email=${user?.email}`)
            return data;
        }
    })

    const done = tasks.filter(task => task.category === "done");
    const inProgress = tasks.filter(task => task.category === "in-progress");
    const toDo = tasks.filter(task => task.category === "to-do");
    // console.log(toDo);
    // console.log(inProgress);
    // console.log(done);

    return (
        <div>
            <SectionTitle title="My Tasks"></SectionTitle>
            <div className="flex justify-center">
                <AddTask></AddTask>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                <div className="bg-red-100 rounded-xl pt-4">
                    <h2 className="text-center text-2xl md:text-4xl">To-Do</h2>
                    {
                        toDo.map((task, idx) => <div key={idx} className="m-2 px-2 rounded-md py-4 border border-gray-700">
                            <h3 className="text-lg md:text-xl">{task.title}</h3>
                            <p className="text-xs">{format(new Date(task.createdAt), `yyyy-MM-dd hh:mm a`)}</p>
                            <p className="">{task.description}</p>
                            <div className="flex gap-4">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>)
                    }
                </div>
                <div className="bg-amber-100 rounded-xl pt-4">
                    <h2 className="text-center text-2xl md:text-4xl">In-Progress</h2>
                    {
                        inProgress.map((task, idx) => <div key={idx} className="m-2 rounded-md px-2 py-4 border border-gray-700">
                            <h3 className="text-lg md:text-xl">{task.title}</h3>
                            <p className="text-xs">{format(new Date(task.createdAt), `yyyy-MM-dd hh:mm a`)}</p>
                            <p className="">{task.description}</p>
                        </div>)
                    }
                </div>
                <div className="bg-emerald-100 rounded-xl pt-4">
                    <h2 className="text-center text-2xl md:text-4xl">Done</h2>
                    {
                        done.map((task, idx) => <div key={idx} className="m-2 rounded-md px-2 py-4 border border-gray-700">
                            <h3 className="text-lg md:text-xl">{task.title}</h3>
                            <p className="text-xs">{format(new Date(task.createdAt), `yyyy-MM-dd hh:mm a`)}</p>
                            <p className="">{task.description}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyTasks;
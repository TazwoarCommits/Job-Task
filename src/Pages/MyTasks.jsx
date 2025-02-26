import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../components/SectionTitle";
import AddTask from "../components/AddTask";
// import TaskCard from "../components/TaskCard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AllTasks from "../components/AllTasks";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyTasks = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [todo, setTodo] = useState([]);
    const [progress, setProgress] = useState([]);
    const [done, setDone] = useState([]);

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["tasks", user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic(`/tasks/user?email=${user?.email}`)
            return data;
        }
    })

    useEffect(() => {
        if (tasks) {
            const todos = tasks.filter((task) => task.category === "todo");
            const inProgress = tasks.filter((task) => task.category === "In-Progress");
            const completed = tasks.filter((task) => task.category === "Done");

            if (JSON.stringify(todos) !== JSON.stringify(todo)) setTodo(todos);
            if (JSON.stringify(inProgress) !== JSON.stringify(progress))
                setProgress(inProgress);
            if (JSON.stringify(completed) !== JSON.stringify(done))
                setDone(completed);
        }
    }, [tasks, todo, progress, done]);
    
    const handleDrop = async (id, newCategory) => {
        if (!id) {
          console.error("Error: Undefined ID received!");
          return;
        }
    
        try {
          const {data} = await axiosPublic.patch(`/updateCategory/${id}`, {
            category: newCategory,
          });
            if(data.modifiedCount > 0){
                refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                  }
        
          
        } catch (error) {
          console.error("Error moving task:", error);
          toast.error("Failed to move task!");
        }
      };

    return (
        <div>
            <SectionTitle title="My Tasks"></SectionTitle>
            <div className="flex justify-center">
                <AddTask refetch={refetch}></AddTask>
            </div>
            <DndProvider backend={HTML5Backend}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                    <AllTasks 
                     tasks={todo} setTasks={setTodo} refetch={refetch} category={"todo"} onDrop={handleDrop}>
                    </AllTasks>
                    <AllTasks
                     tasks={progress} setTasks={setProgress} refetch={refetch} category={"In-Progress"} onDrop={handleDrop}>
                     </AllTasks>
                    <AllTasks 
                     tasks={done} setTasks={setDone} refetch={refetch} category={"Done"} onDrop={handleDrop}>
                    </AllTasks>
                </div>
            </DndProvider>
        </div>
    );
};

export default MyTasks;
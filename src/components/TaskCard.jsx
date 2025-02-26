import { format } from "date-fns";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useDrag } from "react-dnd";

const TaskCard = ({task, refetch }) => {
    const axiosPublic = useAxiosPublic() ; 

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "TASK",
        item: { id: task._id, category: task.category },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosPublic.delete(`/tasks/${id}`)
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Task has been deleted.",
                        icon: "success"
                    });
                }

            }
        });
    }

// console.log(task);

    return (
        <div ref={drag} className={`m-2 px-2 rounded-md py-4 border border-amber-200 ${isDragging? "opacity-80" : "opacity-100"}`}>
            <h3 className="text-lg md:text-xl">{task?.title}</h3>
            <p className="text-xs">{format(new Date(task?.createdAt), `yyyy-MM-dd hh:mm a`)}</p>
            <p className="">{task?.description}</p>
            <div className="flex flex-row-reverse gap-4 mt-2">
                <Link to={`/edit-task/${task._id}`}><p className="text-gray-800 text-xl"><RiEdit2Fill /></p></Link>
                <button className="text-red-800 text-xl" onClick={() => handleDelete(task._id)}><MdDelete /></button>
            </div>
        </div>
    );
};

TaskCard.propTypes = {
    task : PropTypes.object.isRequired,
    refetch : PropTypes.func.isRequired,
    // moveTask : PropTypes.func.isRequired
}

export default TaskCard;
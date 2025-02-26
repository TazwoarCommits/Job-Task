import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import PropTypes from "prop-types";

const AllTasks = ({ tasks, refetch, category , onDrop }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "TASK",
        drop: (item, monitor) => {
            if (!monitor.didDrop()) {
                onDrop(item.id, category);
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    // const moveTask = (dragIndex, hoverIndex) => {
    //     const updatedTasks = [...tasks];
    //     const [movedTask] = updatedTasks.splice(dragIndex, 1);
    //     updatedTasks.splice(hoverIndex, 0, movedTask);
    //     setTasks(updatedTasks);
    // };


    return (
        <div>
            <div ref={drop} className={`rounded-xl pt-4 pb-2 bg-gray-200/75 ${isOver? "bg-gray-100/50" :"bg-gray-200/75"}`}>
                <h2 className="text-center text-2xl md:text-4xl capitalize">{category}</h2>
                {tasks.length === 0 ? <h3 className="text-center text-xl md:text-3xl mb-4">No Data Found</h3> : tasks.map(task => <TaskCard task={task} refetch={refetch}  key={task._id}></TaskCard>)}
            </div>
        </div>
    );
};

AllTasks.propTypes = {
    tasks: PropTypes.object,
    refetch: PropTypes.func,
    category: PropTypes.string,
    onDrop : PropTypes.func,
    setTasks : PropTypes.func,
}

export default AllTasks;











{/* <div className="bg-amber-100 rounded-xl pt-4">
                <h2 className="text-center text-2xl md:text-4xl">In-Progress</h2>
                {progress.length === 0 ? <h3 className="text-center text-xl md:text-3xl mb-4">No Data Found</h3> : progress.map(task => <TaskCard task={task} key={task._id}></TaskCard>)}
            </div>
            <div className="bg-emerald-100 rounded-xl pt-4">
                <h2 className="text-center text-2xl md:text-4xl">Done</h2>
                {done.length === 0 ? <h3 className="text-center text-xl md:text-3xl mb-4">No Data Found</h3> : done.map(task => <TaskCard task={task} key={task._id}></TaskCard>)}
            </div> */}
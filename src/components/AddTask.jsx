import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AddTask = ({refetch}) => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate() ;

    const handleSubmit = async e => {
        e.preventDefault();

        const form = new FormData(e.target);

        const title = form.get("title");
        const description = form.get("description");
        const createdAt = new Date();
        const category = "todo"
        const author = user.email;

        const newTask = { title, description, createdAt, category, author }

        const { data } = await axiosPublic.post("/tasks", newTask);
        if (data.insertedId) {
            refetch() ;
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your task has been saved",
                showConfirmButton: false,
                timer: 1500
            });

            e.target.reset();
            navigate("/my-task")
        }
        else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Something went wrong",
                showConfirmButton: false,
                timer: 1500
            });

        }

    }

    return (
        <form onSubmit={handleSubmit}
            className="bg-gray-100/25 md:px-6 md:py-8 rounded-md">
            <input type="text" name="title" required max maxLength={50} placeholder="Title(50characters)" className="mb-2 bg-gray-100/40 text-black input input-bordered w-full" />
            <textarea maxLength={200}
                placeholder="Description(200characters)" name="description"
                className="h-[150px] textarea textarea-bordered textarea-lg w-full bg-gray-100/40 resize-none mb-2"></textarea>
            <button className="border border-amber-300  bg-gray-100/40 hover:bg-gray-400 font-semibold text-gray-700 px-4 py-2 rounded-lg">Add</button>
        </form>
    );
};
AddTask.propTypes = {
    refetch : PropTypes.func.isRequired,
}

export default AddTask;
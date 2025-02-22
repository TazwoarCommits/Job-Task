import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const AddTask = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const handleSubmit = async e => {
        e.preventDefault();

        const form = new FormData(e.target);

        const title = form.get("title");
        const description = form.get("description");
        const createdAt = new Date();
        const category = "to-do"
        const author = user.email;

        const newTask = { title, description, createdAt, category, author }

        const { data } = await axiosPublic.post("/tasks", newTask);
        if (data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your task has been saved",
                showConfirmButton: false,
                timer: 1500
            });

            e.target.reset();
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
            <input type="text" name="title" placeholder="Title" className="mb-2 bg-gray-100/40 text-black input input-bordered w-full" />
            <textarea
                placeholder="Description" name="description"
                className="h-[150px] textarea textarea-bordered textarea-lg w-full bg-gray-100/40 resize-none mb-2"></textarea>
            <button className="border border-amber-300  bg-gray-100/40 hover:bg-gray-400 font-semibold text-gray-700 px-4 py-2 rounded-lg">Add</button>
        </form>
    );
};

export default AddTask;
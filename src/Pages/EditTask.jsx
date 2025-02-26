import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const EditTask = () => {
    const params = useParams() ;
    const navigate = useNavigate() ; 
    const axiosPublic = useAxiosPublic() ;

    const {data : task={}} = useQuery({
        queryKey : ["task" , params.id ],
        queryFn : async () => {
            const {data} = await axiosPublic(`/tasks/${params.id}`)
            return data ;
        }
    })

   const handleUpdate = async e => {
    e.preventDefault() ; 
     const form = new FormData(e.target) ;
     const newTitle = form.get("title") ;
     const newDescription = form.get("description") ;

     const updatedTask = {
        updatedTitle : newTitle ,
        updatedDescription : newDescription ,
     }

     const {data} = await axiosPublic.patch(`/tasks/${params.id}` , updatedTask) 
    //  console.log(data);
     if(data.modifiedCount > 0){
        e.target.reset() ;
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/my-task") ;
      }
     
   }


    return (
        <form onSubmit={handleUpdate}
        className="bg-gray-100/25 md:px-6 md:py-8 rounded-md">
        <input type="text" defaultValue={task.title} name="title" placeholder="Title" className="mb-2 bg-gray-100/40 text-black input input-bordered w-full" />
        <textarea
            placeholder="Description" name="description" defaultValue={task.description}
            className="h-[150px] textarea textarea-bordered textarea-lg w-full bg-gray-100/40 resize-none mb-2"></textarea>
        <button className="border border-amber-300  bg-gray-100/40 hover:bg-gray-400 font-semibold text-gray-700 px-4 py-2 rounded-lg">Update</button>
    </form>
    );
};

export default EditTask;
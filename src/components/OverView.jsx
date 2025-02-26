import Lottie from "lottie-react";
import animateTODO from "../assets/Lottie/Task.json"
import GoogleLogin from "./socialLogin/GoogleLogin";
import { Link } from "react-router-dom";
import "./Banner.css"
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
// import Swal from "sweetalert2";
import AddTask from "./AddTask";
import useTasks from "../Hooks/useTasks";
import Swal from "sweetalert2";

const OverView = () => {
    const { user } = useContext(AuthContext);
    const {refetch} = useTasks() ;

    const handleLogin = () => {
        Swal.fire({
            position: "center",
            icon: "info",
            title: "Please Login With Google",
            showConfirmButton: false,
            timer: 1500
          });
    }
 

    return (
        <div className="bg py-8 md:p-12 md:rounded-2xl">

            <div className="w-full flex flex-col md:flex-row md:rounded-xl items-center bg-gray-100/10 backdrop-blur-md">
                <div className="hidden md:flex w-full">
                    <Lottie className="h-[300px]" animationData={animateTODO}></Lottie>
                </div>
                {
                    user ?
                        <div className="p-6 w-full mx-auto md:pt-12">
                            <h4 className="text-2xl font-semibold text-center text-cyan-900">Add A New Task</h4>
                            <div className="flex justify-center flex-col items-center">
                               <AddTask refetch={refetch}></AddTask>
                            </div>
                        </div>

                        :

                        <div className="w-full mx-auto md:pt-12">
                            <h4 className="text-2xl font-semibold text-center text-cyan-900">Sign-In to Add New Task</h4>
                            <div id="login" className="flex justify-center flex-col items-center">
                                <GoogleLogin></GoogleLogin>
                                <Link>
                                    <button onClick={handleLogin}
                                        className="flex min-w-80 items-center justify-center font-semibold gap-1 md:gap-2 mx-auto bg-teal-700 rounded-lg py-3 px-4">
                                        <span className="text-white">Login with your email password</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default OverView;
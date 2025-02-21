import Lottie from "lottie-react";
import animateTODO from "../assets/Lottie/Task.json"
import GoogleLogin from "./socialLogin/GoogleLogin";
import { Link } from "react-router-dom";
import "./Banner.css"
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const OverView = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="bg py-8 md:p-12 md:rounded-2xl">

            <div className="w-full flex flex-col md:flex-row md:rounded-xl bg-gray-100/10 backdrop-blur-md">
                <div className="hidden md:flex w-full">
                    <Lottie className="h-[300px]" animationData={animateTODO}></Lottie>
                </div>
                {
                    user ?
                        <div className="w-full mx-auto md:pt-12">
                            <h4 className="text-2xl font-semibold text-center text-cyan-900">Add A New Task</h4>
                            <div className="flex justify-center flex-col items-center">
                                <form className="bg-gray-100/25 md:px-6 md:py-8 rounded-md">
                                    <input type="text" placeholder="Type here" className=" mb-2 bg-gray-100/40 text-black input input-bordered w-full" />
                                    <textarea
                                        placeholder="Bio"
                                        className="textarea textarea-bordered textarea-lg w-full bg-gray-100/40 resize-none mb-2"></textarea>
                                    <button className="bg-gray-100/40 font-semibold text-gray-700 px-4 py-2 rounded-lg">Add</button>    
                                </form>
                            </div>
                        </div>

                        :

                        <div className="w-full mx-auto md:pt-12">
                            <h4 className="text-2xl font-semibold text-center text-cyan-900">SignIn to Add New Task</h4>
                            <div className="flex justify-center flex-col items-center">
                                <GoogleLogin></GoogleLogin>
                                <Link>
                                    <button
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
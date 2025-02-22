import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const provider = new GoogleAuthProvider;
    const navigate = useNavigate() ;

    const handleGoogleLogin = () => {
      googleLogin(provider)
        .then(res => {
            if(res?.user){
                toast.success("Successfully Logged in") ;
                navigate("/")
            } 
        })

        .catch(err => {
            toast.error(`${err.message}`) ;
        })
    }
   

    return (
        <div className="h-24 flex justify-center items-center">
            <button
                onClick={handleGoogleLogin}
                className="min-w-80 flex items-center justify-center font-semibold gap-1 md:gap-2 mx-auto bg-cyan-800 rounded-lg py-3 px-4">
                <FaGoogle className="text-blue-300"></FaGoogle>
                <span className=" text-white">Login with Google</span>
            </button>
        </div>
    );
};

export default GoogleLogin;
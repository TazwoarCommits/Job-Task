import Lottie from "lottie-react";
import GoogleLogin from "../components/socialLogin/GoogleLogin";
import animateLogin from "../assets/Lottie/Login.json"

const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <Lottie animationData={animateLogin} className="h-[300px]"></Lottie>
                        <div className="">
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary border-none bg-emerald-500 hover:bg-emerald-600 text-black">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
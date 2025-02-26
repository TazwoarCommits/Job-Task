import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    };

    return (
        <div className="w-11/12 mx-auto navbar">
            <div className="flex-1">
                <a className="text-xl font-bold text-cyan-900 ">Task Launcher</a>
            </div>
            <ul className="space-x-3 mr-3 hidden md:flex">
                <li> <NavLink to="/">Home</NavLink></li>
                {user? <li><NavLink to="/my-task">My-Tasks</NavLink></li> : <li><Link to="login" smooth={true} >Login</Link></li>}
            </ul>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user ? user?.photoURL : `https://i.ibb.co.com/3z773GB/avatar.png`} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {user ? <li> {user?.displayName}</li> : ""}
                        <li className="md:hidden"> <NavLink to="/">Home</NavLink></li>
                        <li className="md:hidden"><NavLink to="/my-task">My-Tasks</NavLink></li>
                        {user? <li onClick={handleLogOut} className="ml-3 cursor-pointer">Logout</li> : ""}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { Outlet } from "react-router-dom";
import Navbar from "./LayoutComponents/Navbar";
import Footer from "./LayoutComponents/Footer";

const MainLayout = () => {
    return (
        <div>
            <nav className="w-full bg-gray-300/45 backdrop-blur-md sticky top-0 z-10">
                <Navbar></Navbar>
            </nav>
            <main className="md:w-11/12 mx-auto">
                <Outlet></Outlet>
            </main>
            <footer className="md:w-11/12 mx-auto">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;
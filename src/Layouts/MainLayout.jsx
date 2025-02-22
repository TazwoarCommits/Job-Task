import { Outlet } from "react-router-dom";
import Navbar from "./LayoutComponents/Navbar";
import Footer from "./LayoutComponents/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <nav className="w-full bg-gray-300/45 backdrop-blur-md sticky top-0 z-10">
                <Navbar></Navbar>
            </nav>
            <main className="md:w-11/12 mx-auto min-h-[calc(100vh-350px)]">
                <Outlet></Outlet>
            </main>
            <footer className="md:w-11/12 mx-auto">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;
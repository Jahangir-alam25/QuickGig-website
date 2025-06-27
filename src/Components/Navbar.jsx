import { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../Provider/AuthContext";
import userIcon from "../assets/user.png";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import DarkMoodToggler from "./DarkMoodToggle";





const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        console.log("user trying to LogOut");
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logout Successfully",
                    text: "You clicked the button!",
                    icon: "success"
                })
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // const navLinks = [
    //     { name: "Home", path: "/" },
    //     {
    //         name: "Add Task",
    //         path: "/add-task",

    //     },

    //     { name: "Browse Tasks", path: "/browse-tasks" },
    //     { name: "My Posted Tasks", path: "/my-posted-tasks" },
    // ];

    const linkClass =
        "text-blue-800 hover:text-pink-600 px-3 py-2 rounded-md  font-medium";

    const activeClass =
        "underline text-pink-600    px-3 py-2 rounded-md  font-medium";

    const links = <>
        <li> <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : linkClass)}>Home</NavLink></li>
        <li>    <NavLink to="/browse-tasks" className={({ isActive }) => (isActive ? activeClass : linkClass)}>Browse Tasks</NavLink></li>

        {
            user && <>
                <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? activeClass : linkClass)}>Dashboard</NavLink></li>
            </>
        }
        <li> <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : linkClass)}>About Us</NavLink></li>

    </>



    return (
        <nav className="bg-amber-50 dark:bg-gray-800">
            <div className="  px-4 py-3  bg-green-100 dark:text-white">
                <div className=" w-11/12 mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 ">
                        <img src="https://i.ibb.co/DPDHTfhW/anywhere.png" alt="logo" className="h-12 w-12" />
                        <h1 className="text-green-600 font-bold text-2xl"><a data-tooltip-id="my-tooltip" data-tooltip-content="QuickGig is a Freelance Marketplace. It is launched Since 1985">Quick<span className="text-pink-300">G</span>ig</a></h1>
                        <Tooltip id="my-tooltip" style={{ backgroundColor: "rgb(0,170,255)", color: "#222" }} />
                    </div>



                    {/* Desktop Nav Links */}
                    <div className="">
                        {/* {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => (isActive ? activeClass : linkClass)}
                        >
                            {link.name}
                        </NavLink>
                    ))} */}
                        <ul className="hidden md:flex space-x-3">
                            {links}
                        </ul>
                    </div>
                    <div className="hidden md:flex items-center gap-6">

                        {user ? (
                            <div className="flex items-center gap-3">
                                <div className="relative group">
                                    <Link to='/profile'>
                                        <img
                                            src={`${user.photoURL ? user.photoURL : userIcon}`}
                                            alt="Profile"
                                            className="w-8 h-8 rounded-full cursor-pointer"
                                        />
                                    </Link>
                                    <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                                        {user.displayName}
                                    </span>
                                </div>
                                <button onClick={handleLogOut} className="text-sm btn px-10 bg-green-600 text-white hover:underline">Logout</button>
                            </div>
                        ) : (
                            <div className="space-x-3">
                                <Link to="/auth/register" className="bg-green-600 text-white px-10 py-2 rounded hover:bg-green-700 text-sm">
                                    Sign Up
                                </Link>
                                <Link to="/auth/login" className="bg-green-600 text-white px-10 py-2 rounded hover:bg-green-700 text-sm">
                                    Login
                                </Link>
                            </div>
                        )}
                        <div>
                            <DarkMoodToggler></DarkMoodToggler>
                        </div>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-4 space-y-2">
                        <div className="flex gap-3 justify-between">
                            <div>
                                {/* {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive ? `${activeClass} block` : `${linkClass} block`
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <NavLink to="/profile" className={({ isActive }) => (isActive ? activeClass : linkClass)}>My Profile</NavLink> */}
                                <ul>
                                    {links}
                                </ul>
                            </div>
                            <div className="flex items-start gap-3">
                                <DarkMoodToggler></DarkMoodToggler>
                            </div>
                        </div>

                        {user ? (
                            <div className="flex items-center gap-3 px-3">
                                <img
                                    src={`${user.photoURL ? user.photoURL : userIcon}`}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="text-sm">{user.username}</span>
                                <button onClick={handleLogOut} className="btn px-10 bg-green-600  text-white hover:underline ml-auto">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className=" gap-3 flex justify-between ">
                                <Link to="/auth/register" className="bg-green-600 btn-block text-white  text-center py-2 rounded hover:bg-green-700 text-sm">
                                    Sign Up
                                </Link>
                                <Link to="/auth/login" className="bg-green-600 btn-block text-white text-center py-2 rounded hover:bg-green-700 text-sm">
                                    Login
                                </Link>
                            </div>

                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar

import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";





const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);



    const user = null



    const navLinks = [
        { name: "Home", path: "/" },
        {
            name: "Add Task",
            path: "/add-task",

        },
        { name: "Browse Tasks", path: "/browse-tasks" },
        { name: "My Posted Tasks", path: "/my-posted-tasks" },
    ];

    const linkClass =
        "text-blue-800 hover:text-pink-600 px-3 py-2 rounded-md  font-medium";

    const activeClass =
        "underline text-pink-300    px-3 py-2 rounded-md  font-medium"; 

    return (
        <nav className=" border-b  px-4 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 ">
                    <img src="https://i.ibb.co/spxk8Q2n/5464588.jpg" alt="logo" className="h-12 w-12" />
                    <h1 className="text-green-600 font-bold text-2xl">Quick<span className="text-pink-300">G</span>ig</h1>
                </div>

                {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-3">
                    {navLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) => (isActive ? activeClass : linkClass)}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
                <div className="hidden md:flex items-center gap-6">
                    <NavLink to="/profile" className={({ isActive }) => (isActive ? activeClass : linkClass)}>My Profile</NavLink>
                    {user ? (
                        <div className="flex items-center gap-3">
                            <div className="relative group">
                                <img
                                    src={`${user.photoURL ? user.photoURL : 'https://i.ibb.co/1fbf4mxt/application-1.png'}`}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full cursor-pointer"
                                />
                                <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                                    {user.displayName}
                                </span>
                            </div>
                            <button className="text-sm btn px-10 bg-green-600 text-white hover:underline">Logout</button>
                        </div>
                    ) : (
                       <div className="space-x-3">
                         <Link to="#" className="bg-green-600 text-white px-10 py-2 rounded hover:bg-green-700 text-sm">
                            Sign Up
                        </Link>
                         <Link to="/auth/login" className="bg-green-600 text-white px-10 py-2 rounded hover:bg-green-700 text-sm">
                            Login
                        </Link>
                       </div>
                    )}

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
                    {navLinks.map((link) => (
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

                    {user ? (
                        <div className="flex items-center gap-3 px-3">
                            <img
                                src={`${user.photoURL ? user.photoURL : 'https://i.ibb.co/1fbf4mxt/application-1.png'}`}
                                alt="Profile"
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm">{user.username}</span>
                            <button className="btn px-10 bg-green-600  text-white hover:underline ml-auto">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className=" gap-3 flex justify-between ">
                         <Link to="#" className="bg-green-600 btn-block text-white  text-center py-2 rounded hover:bg-green-700 text-sm">
                            Sign Up
                        </Link>
                         <Link to="#" className="bg-green-600 btn-block text-white text-center py-2 rounded hover:bg-green-700 text-sm">
                            Login
                        </Link>
                       </div>

                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar

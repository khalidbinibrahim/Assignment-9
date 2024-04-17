import { NavLink } from "react-router-dom";
import { RiVipCrownLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(toast.success('user log out successfully'))
            .catch()
    }

    const navLinks = <>
        <NavLink to="/" className="mr-3 font-bold text-[#0d0d0dcc] hover:bg-base-300 focus:border-b-2 focus:border-[#F9A51A] focus:text-[#F9A51A] focus:font-semibold rounded-lg py-2 px-3">Home</NavLink>
        <NavLink to="/news" className="mr-3 font-bold text-[#0d0d0dcc] hover:bg-base-300 focus:border-b-2 focus:border-[#F9A51A] focus:text-[#F9A51A] focus:font-semibold rounded-lg py-2 px-3">News</NavLink>
        <NavLink to="/destination" className="mr-3 font-bold text-[#0d0d0dcc] hover:bg-base-300 focus:border-b-2 focus:border-[#F9A51A] focus:text-[#F9A51A] focus:font-semibold rounded-lg py-2 px-3">Destination</NavLink>
        <NavLink to="/blog" className="mr-3 font-bold text-[#0d0d0dcc] hover:bg-base-300 focus:border-b-2 focus:border-[#F9A51A] focus:text-[#F9A51A] focus:font-semibold rounded-lg py-2 px-3">Blog</NavLink>
        <NavLink to="/contact" className="mr-3 font-bold text-[#0d0d0dcc] hover:bg-base-300 focus:border-b-2 focus:border-[#F9A51A] focus:text-[#F9A51A] focus:font-semibold rounded-lg py-2 px-3">Contact</NavLink>
    </>

    return (
        <div className="navbar font-montserrat px-32 py-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex gap-2 items-center mr-6 text-3xl">
                    <RiVipCrownLine />
                    <a className="font-bold text-[#131313]">Luxury</a>
                </div>

                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 text-2xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                            <IoSearchOutline />
                        </svg>
                    </div>
                    <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your Destination..." />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex mr-4 ml-4">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="">
                {
                    user ?
                        <div className="flex gap-2 items-center">
                            <button onClick={handleLogOut} className="btn bg-[#FBB804] text-black font-bold px-7">Log Out</button>
                            <NavLink to="/update_profile">
                                <img alt="" src={user?.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} className="w-24 rounded-full" />
                            </NavLink>
                        </div> :
                        <NavLink to="/login" className="btn bg-[#FBB804] text-black font-bold px-7">Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Navigation;
import { RiVipCrownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-950 text-neutral-content font-poppins">
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center text-3xl mb-2">
                        <RiVipCrownLine />
                        <a className="font-bold text-white">Luxury</a>
                    </div>
                    <p className="font-montserrat text-white text-sm font-medium">Welcome to our Luxury Real Estate, your gateway to luxury living. Discover <br /> exclusive properties that redefine opulence and sophistication. Explore our curated <br /> selection of estates, villas, and penthouses in the world most prestigious <br /> destinations. Find your dream home with us today.</p>
                </div>
                <nav>
                    <NavLink to="/" className="link link-hover text-white hover:text-[#FBB804]">Home</NavLink>
                    <NavLink to="/news" className="link link-hover text-white hover:text-[#FBB804]">News</NavLink>
                    <NavLink to="/destination" className="link link-hover text-white hover:text-[#FBB804]">Destination</NavLink>
                    <NavLink to="/blog" className="link link-hover text-white hover:text-[#FBB804]">Blog</NavLink>
                    <NavLink to="/contact" className="link link-hover text-white hover:text-[#FBB804]">Contact</NavLink>
                </nav>
                <nav>
                    <a className="link link-hover text-white hover:text-[#FBB804]">Suites</a>
                    <a className="link link-hover text-white hover:text-[#FBB804]">Apartment</a>
                    <a className="link link-hover text-white hover:text-[#FBB804]">Villas & Houses</a>
                    <a className="link link-hover text-white hover:text-[#FBB804]">Butique Room</a>
                    <a className="link link-hover text-white hover:text-[#FBB804]">Buildings</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
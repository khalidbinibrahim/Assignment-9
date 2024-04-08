import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1612965607446-25e1332775ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] px-32 py-12">
            <div className="flex gap-6">
                <div>
                    <h1 className="mb-5 text-6xl font-black text-white">LUXURY ESTATE</h1>
                    <p className="font-montserrat text-white font-normal mb-6">Welcome to Your Company Name, your gateway to luxury living. Discover <br /> exclusive properties that redefine opulence and sophistication. Explore our curated <br /> selection of estates, villas, and penthouses in the world most prestigious <br /> destinations. Find your dream home with us today.</p>
                    <a className="btn bg-[#FBB804] text-black font-semibold px-7 text-center">Booking <i className="text-lg"><FaArrowRightLong /></i></a>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;
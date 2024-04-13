import { BiDollarCircle } from "react-icons/bi";
import { FaRegMap } from "react-icons/fa6";

const Estate = ({ estate }) => {

    const { estate_title, segment_name, description, price, status, area, location, facilities, image, view_property_url } = estate;

    return (
        <div className="border-2 border-gray-300 rounded-xl">
            <div className="p-6">
                <div className="mb-4">
                    <img height="200px" width="330px" className="rounded-2xl" src={image} alt="" />
                </div>

                <div className="mb-8">
                    <h3 className="font-bebasNeue text-2xl text-black font-medium mb-3">{estate_title}</h3>
                    <p className="font-poppins font-normal text-[#878787]">{description}</p>
                </div>

                <div className="mb-6">
                    <h4 className="font-bebasNeue font-medium text-black mb-3">Facilities: </h4>
                    <ul className="font-poppins font-normal text-[#878787]">
                        <li><span className="badge badge-xs bg-[#878787]"></span> {facilities[0]}</li>
                        <li><span className="badge badge-xs bg-[#878787]"></span> {facilities[1]}</li>
                        <li><span className="badge badge-xs bg-[#878787]"></span> {facilities[2]}</li>
                    </ul>
                </div>

                <div className="flex items-center gap-6 font-poppins mb-6">
                    <p className="text-[#282828CC] font-normal flex items-center gap-1"><BiDollarCircle className="text-xl" /> {price}</p>
                    <p className="text-[#282828CC] font-normal flex items-center gap-2"><FaRegMap className="text-xl" /> {area}</p>
                </div>

                <div>
                <a className="btn w-full bg-[#FBB804] font-montserrat text-black font-bold px-7 text-center rounded-md border-none">View Property</a>
                </div>
            </div>
        </div>
    );
};

export default Estate;
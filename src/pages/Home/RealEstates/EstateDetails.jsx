import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiDollarCircle } from "react-icons/bi";
import { FaRegMap } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const EstateDetails = () => {
    const { id } = useParams();
    const [estate, setEstate] = useState(null);

    useEffect(() => {
        fetch('/estates.json')
            .then(res => res.json())
            .then(data => {
                const singleEstate = data.find(estate => estate.id === parseInt(id));
                setEstate(singleEstate);
            });
    }, [id]);

    if (!estate) {
        return <div>Loading...</div>;
    }

    const { estate_title, segment_name, description, price, status, area, location, facilities, image, view_property_url } = estate;

    return (
        <div>
            <div className="px-32 my-10">
                <div className="flex gap-10 justify-center p-6">
                    <div className="p-8 bg-[#1313130D] rounded-2xl">
                        <img src={image} alt="" />
                    </div>

                    <div>
                        <div className="mb-3">
                            <h2 className="text-[#131313] font-bebasNeue font-semibold text-4xl mb-4">{estate_title}</h2>
                            <p className="text-[#0d0d0dcc] font-montserrat font-medium">{segment_name}</p>
                        </div>
                        <hr />
                        <div className="my-4">
                            <p className="text-[#0d0d0dcc] font-poppins font-medium">Status: {status}</p>
                        </div>
                        <hr />
                        <div className="">
                            <p className="text-[#131313B3] my-4 font-poppins"><span className="text-[#131313] font-semibold font-bebasNeue">Review:</span> {description}</p>
                            <div className="flex">
                                <div className="mb-6">
                                    <h4 className="font-bebasNeue font-medium text-black mb-3">Facilities: </h4>
                                    <ul className="font-poppins font-normal text-[#878787]">
                                        <li><span className="badge badge-xs bg-[#878787]"></span> {facilities[0]}</li>
                                        <li><span className="badge badge-xs bg-[#878787]"></span> {facilities[1]}</li>
                                        <li><span className="badge badge-xs bg-[#878787]"></span> {facilities[2]}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="font-poppins">
                            <div>
                                <p className="text-[#282828CC] font-normal flex items-center gap-2 mb-1"><BiDollarCircle className="text-xl" /><i className="font-montserrat font-medium">Price:</i> {price}</p>
                                <p className="text-[#282828CC] font-normal flex items-center gap-2 mb-1"><FaRegMap className="text-xl" /><i className="font-montserrat font-medium">Area:</i> {area}</p>
                                <p className="text-[#282828CC] font-normal flex items-center gap-2"><IoLocationOutline className="text-xl" /><i className="font-montserrat font-medium">Location:</i> {location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;

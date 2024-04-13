import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EstateDetails = () => {
    const { id } = useParams();
    const [estate, setEstate] = useState(null);

    useEffect(() => {
        fetch('/estates.json')
            .then(res => res.json())
            .then(data => {
                const singleEstate = data.find(estate => estate.Id === parseInt(id));
                setEstate(singleEstate);
            });
    }, [id]);

    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image, view_property_url } = estate;

    return (
        <div>
            <div className="">
                <div className="flex gap-12 justify-center p-6">
                    <div className="p-12 bg-[#1313130D] rounded-2xl">
                        <img src={image} alt="" />
                    </div>

                    <div>
                        <div className="mb-3">
                            <h2 className="text-[#131313] font-bebasNeue font-bold text-4xl mb-4">{estate_title}</h2>
                            <p className="text-[#0d0d0dcc] font-montserrat font-medium">{segment_name}</p>
                        </div>
                        <hr />
                        <div className="my-4">
                            <p className="text-[#0d0d0dcc] font-poppins font-medium">{status}</p>
                        </div>
                        <hr />
                        <div className="font_work">
                            <p className="text-[#131313B3] my-4"><span className="text-[#131313] font-bold">Review:</span> {description}</p>
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
                        <div className="my-4 font_work">
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;
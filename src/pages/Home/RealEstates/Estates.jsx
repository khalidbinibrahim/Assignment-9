import { useEffect, useState } from "react";
import Estate from "../RealEstates/Estate"
import Aos from "aos";
import 'aos/dist/aos.css'

const Estates = () => {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch('/estates.json')
            .then(res => res.json())
            .then(data => setEstates(data));
    }, []);

    useEffect(() =>{
        Aos.init({duration: 1000});
    }, [])

    return (
        <div data-aos="fade-down">
            <div className="mb-12">
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">Estate Section</h2>
                <p className="font-poppins font-normal text-[#878787] text-center">Real estate is defined as the land and any permanent structures, like a home, or <br /> improvements attached to the land, whether natural or man-made.</p>
            </div>

            <div className="px-32 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate} />)
                }
            </div>
        </div>
    );
};

export default Estates;
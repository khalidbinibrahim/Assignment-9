import { Helmet } from "react-helmet-async";

const Destination = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury | Destination</title>
            </Helmet>
            <div className="mb-24">
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">Destination</h2>
                <p className="font-poppins font-normal text-[#878787] text-center">This concept can be defined as the destination country, region or place, final <br /> destination in tourism movements, as well as the place chosen and/or determined by the people as <br /> the point where they intend to go or wants to reach on their trip.</p>
            </div>
        </div>
    );
};

export default Destination;
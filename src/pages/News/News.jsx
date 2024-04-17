import { Helmet } from "react-helmet-async";

const News = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury | News</title>
            </Helmet>
            <div className="mb-24">
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">News</h2>
                <p className="font-poppins font-normal text-[#878787] text-center">News is information about current events. This may be provided through many different <br /> media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events. </p>
            </div>
        </div>
    );
};

export default News;
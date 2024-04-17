import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury | Contact</title>
            </Helmet>
            <div className="mb-24">
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">Contact</h2>
                <p className="font-poppins font-normal text-[#878787] text-center">Contact is the act of touching or communicating with someone or something else. The question <br /> increasingly is not whether there is other life in the universe, but how on earth we will ever make contact with it.</p>
            </div>
        </div>
    );
};

export default Contact;
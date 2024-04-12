import { Helmet } from "react-helmet-async";
import Header from "./Header/Header";
import Estates from "./RealEstates/Estates";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury | Home</title>
            </Helmet>
            <Header />
            <Estates />
        </div>
    );
};

export default Home;
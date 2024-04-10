import { Helmet } from "react-helmet-async";
import Header from "./Header/Header";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury | Home</title>
            </Helmet>
            <Header />
        </div>
    );
};

export default Home;
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage"
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import News from "../pages/News/News";
import Destination from "../pages/Destination/Destination";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import EstateDetails from "../pages/Home/RealEstates/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/create_account',
                element: <CreateAccount />
            },

            {
                path: '/news',
                element: <News />
            },

            {
                path: '/destination',
                element: <Destination />
            },

            {
                path: '/blog',
                element: <Blog />
            },

            {
                path: '/contact',
                element: <Contact />
            },

            {
                path: '/estate/:id',
                element: <PrivateRoute><EstateDetails /></PrivateRoute>
            },

            {
                path: '/update_profile',
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>
            }
        ]
    }    
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage"
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }    
]);

export default router;
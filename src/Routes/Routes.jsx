import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import ShowAllApps from "../Pages/ShowAllApps";
import AppDetails from "../Pages/AppDetails";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/all-apps',
                element: <ShowAllApps />
            },
            {
                path: '/installed-apps',
                element: <Installation />
            },
            {
                path: '/app/:id',
                element: <AppDetails />
            },
        ],
    },
])

export default router
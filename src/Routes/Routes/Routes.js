import { createBrowserRouter } from "react-router-dom";
import About from "../../Components/About/About";
import Appointment from "../../Components/Appointment/Appointment/Appointment";
import DashBoard from "../../Components/DashBoard/DashBoard/DashBoard";
import Home from "../../Components/Home/Home/Home";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/Login/SignUp";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/appointment',
                element: <Appointment/>
            },
            {
                path: '/about',
                element: <About/>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard/></PrivateRoute>
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../pages/Courses/Courses/Courses";
import Home from "../pages/Home/Home";
import Login from "../pages/sheared/Login/Login";
import SignUP from "../pages/sheared/SignUp/SignUP";

export const routes = createBrowserRouter([
    {path:'/',
     element:<Main />,
    children:[
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/courses',
            loader: () => fetch('https://fun-learning-server.vercel.app/categories'),
            element:<Courses />
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/signup',
            element:<SignUP />
        }
    ]
}
])
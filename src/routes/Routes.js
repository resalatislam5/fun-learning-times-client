import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Course from "../pages/Course/Course";
import Courses from "../pages/Courses/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import PremiumCourse from "../pages/PremiunCourse/PremiumCourse";
import Login from "../pages/sheared/Login/Login";
import SignUP from "../pages/sheared/SignUp/SignUP";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
            path:'/course/:id',
            loader: ({params}) => {
                const id = params.id;
                return fetch(`https://fun-learning-server.vercel.app/category/${id}`)
            },
            element:<Course />
        },
        {
            path:'/premiumcourse/:id',
            loader: ({params}) => {
                const id = params.id;
                return fetch(`https://fun-learning-server.vercel.app/category/${id}`)
            },
            element:<PrivateRoutes><PremiumCourse /></PrivateRoutes>
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/faq',
            element:<Faq />
        },
        {
            path:'/blog',
            element:<Blog />
        },
        {
            path:'/signup',
            element:<SignUP />
        }
    ]
}
])
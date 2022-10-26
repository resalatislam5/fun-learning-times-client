import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Course from "../pages/Course/Course";
import Courses from "../pages/Courses/Courses/Courses";
import Home from "../pages/Home/Home";
import PremiumCourse from "../pages/PremiunCourse/PremiumCourse";
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
            element:<PremiumCourse />
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
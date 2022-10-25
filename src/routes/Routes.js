import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/sheared/Login/Login";

export const routes = createBrowserRouter([
    {path:'/',
     element:<Main />,
    children:[
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/login',
            element:<Login />
        }
    ]
}
])
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProviderContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthProviderContext);
    if(loading){
        return <div className="flex justify-center items-center"><button className="btn btn-square loading"></button></div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;
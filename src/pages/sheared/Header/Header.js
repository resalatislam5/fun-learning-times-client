import React, {useState} from "react";
import { Link } from 'react-router-dom';
import  header_logo  from '../../../ass/header_logo.png'
import DarkModeToggle from "react-dark-mode-toggle";
import userProfile from '../../../ass/user.jpg'
import { useContext } from "react";
import { AuthProviderContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const {user,logOut} = useContext(AuthProviderContext);
    const handleSignOut = () =>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            
          });
          
    }
    return (
        <div>
            <div className="navbar bg-base-100 py-4 shadow-lg mt-2 px-5 rounded-lg">
                <div className="navbar-start mr-3">
                    <div className="dropdown mr-2">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li>
                        <Link to='/faq' className="justify-between">FAQ</Link>
                        </li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={80}
                        />
                    </ul>
                    </div>
                    <Link to='/'><img className='w-20 rounded-full ' src={header_logo} alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex font-bold">
                    <ul className="menu menu-horizontal p-0">
                    <li><Link to='/courses'>Courses</Link></li>
                    <li >
                        <Link to='/faq'>FAQ</Link>
                    </li>
                    <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user?.uid ?
                        <>
                            <div className="w-10 rounded-full mr-5">
                            {
                                user && user?.displayName ?
                                <img className="rounded-full" src={user?.photoURL} alt={user?.displayName} title={user?.displayName} />
                                :
                                <img src={userProfile} alt="Profile" />

                            }
                            </div>                            
                            <button onClick={handleSignOut} className="btn btn-error text-white lg:mr-5 ">sign Out</button>
                        </>
                        :
                        <>
                        <Link to='/login' className="btn btn-error text-white  mr-2">Login</Link>
                        <Link to='/signup' className="btn btn-error text-white lg:mr-5 ">sign up</Link>
                        </>
                    }
                    <DarkModeToggle className="hidden lg:visible"
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={80}
                        />
                </div>
            </div>
        </div>
    );
};

export default Header;
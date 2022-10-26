import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthProviderContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
    const [err, setErr] = useState();
    const {loginPopup,passwordLogin} = useContext(AuthProviderContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate()
    const handleGoogle = () =>{
        loginPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            navigate('/')
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage)
          });
    }
    const handleGithub = () =>{
        loginPopup(githubProvider)
        .then((result) => {
            navigate('/')
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage)
          });
    }
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        passwordLogin(email, password)
        .then(result =>{
            form.reset()
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage)
          });
    }
    return (
        <div className='font-serif lg:mt-[5%] mt-7'>
            <div className='h-full'>
                <div className='font-[500] flex flex-col items-center mb-5'>
                    <div className='flex flex-col justify-around'>
                        <div>
                            <h3 className='text-2xl '>Fun Learning Time</h3>
                            <p className='text-sm text-[#898D93]'>Welcome, Please login to your account.</p>
                        </div>                        
                    </div>
                    <div className='flex flex-col mt-4'>
                    <p className='text-[#E74425] text-sm'>{err}</p>
                    <p className='pt-5 text-[#E74425] text-2xl'>{}</p>
                    </div>
                    <form onSubmit={handleLogin} className='flex flex-col gap-3 w-80'>
                        <p className='text-[#50565F] text-lg'>Username or Email</p>
                        <input type="email" name='email' placeholder="Enter your username or email" className="input md:w-96 p-5 border-2 border-[#D3D7DF] rounded-md" required/>
                        <p className='text-[#50565F] text-lg'>Password</p>
                        <input type="Password" name='password' placeholder="Enter your password" className="input md:w-96 p-5 border-2 border-[#D3D7DF] rounded-md" required/>
                        <button className="btn bg-red-500 hover:bg-red-600 border-0 mt-2 md:w-96">Login</button>
                        <p className='flex justify-end text-sm'>No account yet?  <Link to='/signup' className='underline ml-2 text-yellow-500 font-semibold'>Sign up</Link></p>
                       <div className='mt-3 '>
                        <p className='text-center mb-5'>Or</p>
                       </div>
                    </form>
                    <div className='w-80'>
                        <button onClick={handleGoogle} className="btn bg-amber-400 hover:bg-amber-600 border-0 w-full md:w-96 mb-3"><FaGoogle className='text-2xl mr-1 text-amber-400 bg-white rounded-full'/> Google</button>
                        <button onClick={handleGithub} className="btn border-0 w-full md:w-96"><FaGithub className='text-2xl mr-1' />  Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
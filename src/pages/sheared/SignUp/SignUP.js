import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthProviderContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
const SignUP = () => {
    const [err, setErr] = useState();
    const {loginPopup,passwordSignUp,updateUserProfile} = useContext(AuthProviderContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const handleGoogle = () =>{
        loginPopup(googleProvider)
        .then((result) => {
            navigate(from, {replace:true})
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage)
          });
    }
    const handleGithub = () =>{
        loginPopup(githubProvider)
        .then((result) => {
            navigate(from, {replace:true})
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage)
          });
    }
    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const photoURL = form.photo.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        passwordSignUp(email, password)
        .then(result =>{
            navigate(from, {replace:true})
            updateUserProfile(name,photoURL)
            .then(() => {

              }).catch((error) => {
                setErr(error)
              });
            console.log(result.user)
            form.reset()
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage)
          });
    }
    return (
        <div>
            <div className='font-serif lg:mt-[2%] mt-5'>
            <div className='h-full'>
                <div className='font-[500] flex flex-col items-center mb-2'>
                    <div className='flex flex-col justify-around'>
                        <div>
                            <h3 className='text-2xl '>Fun Learning Time</h3>
                            <p className='text-sm text-[#898D93]'>Welcome, Please sign up to your account.</p>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                    <p className='text-[#E74425] text-sm'>{err}</p>
                    <p className='pt-5 text-[#E74425] text-2xl'>{}</p>
                    </div>
                    <form onSubmit={handleSignUp} className='flex flex-col gap-2 w-80'>
                        <p className='text-[#50565F] text-lg'>Name</p>
                        <input type="text" name='name' placeholder="Enter your username or email" className="input md:w-96  p-5 border-2 border-[#D3D7DF] rounded-md" required/>
                        <p className='text-[#50565F] text-lg'>Photo Url</p>
                        <input type="text" name='photo' placeholder="Enter your username or email" className="input md:w-96 p-5 border-2 border-[#D3D7DF] rounded-md" />
                        <p className='text-[#50565F] text-lg'>Username or Email</p>
                        <input type="email" name='email' placeholder="Enter your username or email" className="input md:w-96 p-5 border-2 border-[#D3D7DF] rounded-md" required/>
                        <p className='text-[#50565F] text-lg'>Password</p>
                        <input type="Password" name='password' placeholder="Enter your password" className="input md:w-96 p-5 border-2 border-[#D3D7DF] rounded-md" required/>
                        <button className="btn bg-red-500 hover:bg-red-600 border-0 mt-2 md:w-96">Sign up</button>
                        <p className='flex justify-end text-sm'>Already have an account? <Link to='/login' className='underline ml-2 text-yellow-500 font-semibold'>Log in</Link></p>
                       <div className='mt-5 '>
                        <p className='text-center mb-5'>Or</p>
                       </div>
                    </form>
                       <div className="w-80 ">
                       <button onClick={handleGoogle} className="btn bg-amber-400 hover:bg-amber-600 border-0 w-full mb-3 md:w-96"><FaGoogle className='text-2xl mr-1 text-amber-400 bg-white rounded-full'/> Google</button>
                        <button onClick={handleGithub} className="btn border-0 w-full md:w-96"><FaGithub className='text-2xl mr-1 ' /> Github</button>
                       </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUP;
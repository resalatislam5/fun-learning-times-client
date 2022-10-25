import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";

const SignUP = () => {
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
                    {/* <p className='text-[#E74425] text-sm'> login For External User</p> */}
                    <p className='pt-5 text-[#E74425] text-2xl'>{}</p>
                    </div>
                    <form className='flex flex-col gap-2 w-80 md:96'>
                        <p className='text-[#50565F] text-lg'>Name</p>
                        <input type="text" name='name' placeholder="Enter your username or email" className="input md:w-96  p-5 border-2 border-[#D3D7DF] rounded-md" required/>
                        <p className='text-[#50565F] text-lg'>Photo Url</p>
                        <input type="text" name='name' placeholder="Enter your username or email" className="input md:w-96 p-5 border-2 border-[#D3D7DF] rounded-md" required/>
                        <p className='text-[#50565F] text-lg'>Username or Email</p>
                        <input type="email" name='email' placeholder="Enter your username or email" className="input md:w-96 p-5 border-2 border-[#D3D7DF] rounded-md" required/>
                        <p className='text-[#50565F] text-lg'>Password</p>
                        <input type="Password" name='password' placeholder="Enter your password" className="input md:w-96 p-5 border-2 border-[#D3D7DF] rounded-md" required/>
                        <button className="btn bg-red-500 hover:bg-red-600 border-0 mt-2 md:w-96">Sign up</button>
                        <p className='flex justify-end text-sm'>Already have an account? <Link to='/login' className='underline ml-2 text-yellow-500 font-semibold'>Log in</Link></p>
                       <div className='mt-5 '>
                        <p className='text-center mb-5'>Or</p>
                       <button className="btn bg-amber-400 hover:bg-amber-600 border-0 w-full mb-3 md:w-96"><FaGoogle className='text-2xl mr-1 text-amber-400 bg-white rounded-full'/> Google</button>
                        <button className="btn border-0 w-full md:w-96"><FaGithub className='text-2xl mr-1 ' /> Github</button>
                       </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUP;
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='font-serif mt-[5%]'>
            <div className='h-full'>
                <div className='font-[500] flex flex-col items-center mb-5'>
                    <div className='flex flex-col justify-around'>
                        <div>
                            <h3 className='text-2xl '>Fun With Time</h3>
                            <p className='text-sm text-[#898D93]'>Welcome, Please login to your account.</p>
                        </div>
                        {/* <button className="btn btn-outline border-2  border-[#065FD4] hover:bg-[#065FD4] text-[#065FD4] text-sm w-96"><span className='mr-2'><img src={google} alt="" /></span> Log in with Google</button> */}
                    </div>
                    <div className='flex flex-col mt-4'>
                    {/* <p className='text-[#E74425] text-sm'> login For External User</p> */}
                    <p className='pt-5 text-[#E74425] text-2xl'>{}</p>
                    </div>
                    <form className='h-[40vh] flex flex-col gap-3'>
                        <p className='text-[#50565F] text-lg'>Username or Email</p>
                        <input type="email" name='email' placeholder="Enter your username or email" className="input w-96 p-5 border-2 border-[#D3D7DF] rounded-md" required/>
                        <p className='text-[#50565F] text-lg'>Password</p>
                        <input type="Password" name='password' placeholder="Enter your password" className="input w-96 p-5 border-2 border-[#D3D7DF] rounded-md" required/>
                        <button className="btn bg-red-500 hover:bg-red-600 border-0">Log in</button>
                        <p>No account yet? <Link to='signup'>Sign up</Link></p>
                       <div className='mt-5 '>
                        <p className='text-center mb-5'>Or</p>
                       <button className="btn bg-amber-400 hover:bg-amber-600 border-0 w-full mb-3">Google</button>
                        <button className="btn border-0 w-full">Github</button>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
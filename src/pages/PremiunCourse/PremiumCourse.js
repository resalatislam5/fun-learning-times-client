import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumCourse = () => {
    const course = useLoaderData()
    const {img,title,body} = course
    return (
        <div>
         <div className='w-[570px] mx-auto my-10'>
            <div className='flex justify-center'>
            <img  src={img} alt="" />
            </div>
            <div className='mt-7'>
             <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='mt-4 text-lg '>{body}</p>
            </div>
        </div>
        </div>
    );
};

export default PremiumCourse;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const Courses = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-4'>
            <div className='col-span-1'>
            <SideNav categories={categories} />
            </div>
            <div className='col-span-3'>
                Card
            </div>
        </div>
        </div>
    );
};

export default Courses;
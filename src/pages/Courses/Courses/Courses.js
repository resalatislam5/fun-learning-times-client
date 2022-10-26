import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import SideNav from '../SideNav/SideNav';

const Courses = () => {
    const categories = useLoaderData()
    return (
        <div className='container mx-auto my-10'>
            <div className='md:grid md:grid-cols-4'>
            <div className='md:col-span-1 text-center md:text-left mb-3 md:mb-0'>
            <SideNav categories={categories} />
            </div>
            <div className='col-span-3'>
                <div className='grid  lg:grid-cols-2 xl:grid-cols-3 w-96 lg:w-full mx-auto gap-5'>
                    {
                        categories.map(c => <Card key={c.id} category = {c} />)
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Courses;
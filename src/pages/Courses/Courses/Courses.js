import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import SideNav from '../SideNav/SideNav';

const Courses = () => {
    const categories = useLoaderData()
    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-4'>
            <div className='col-span-1'>
            <SideNav categories={categories} />
            </div>
            <div className='col-span-3'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
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
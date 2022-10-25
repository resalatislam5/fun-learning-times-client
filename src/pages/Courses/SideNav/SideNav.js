import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({categories}) => {
    console.log(categories)
    return (
        <div className='mt-10'>
            <h1 className='text-2xl font-semibold mb-4'>Course Details</h1>
            <div>
                {
                    categories.map(c => <Link to={`course/${c.id}`} className='block text-xl underline py-2 text-green-800'>{c.name}</Link>)
                }
            </div>
        </div>
    );
};

export default SideNav;
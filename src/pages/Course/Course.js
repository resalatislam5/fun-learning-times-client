import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GiChessKing } from "react-icons/gi";

const Course = () => {
    const course = useLoaderData();
    const {img,body,title,id} = course;
    return (
        <div className="card w-96 mx-auto my-10bg-base-100 shadow-xl my-10">
                <figure><img className='w-96 h-80' src={img} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {title}</h2>
                    <p className='mt-4 text-lg'>{body.slice(0,150)}...</p>
                    <div className="card-actions justify-end">
                    <Link to={`/premiumcourse/${id}`}><button className="btn btn-active btn-secondary mt-5">Get premium access <GiChessKing className='text-xl ml-2'/></button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Course;
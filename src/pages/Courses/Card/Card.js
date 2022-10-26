import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from "react-icons/hi";
const Card = ({category}) => {
    const {img,name, title,id} = category;
    return (
        <div>
            <div className="card md:w-96 w-80 bg-base-100 shadow-xl mx-auto md:mx-0">
                <figure><img className='w-96 h-80' src={img} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Course: {title.length < 30 ? title : title.slice(0,30) + '...'}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/course/${id}`}><button className="btn bg-yellow-500 border-0 hover:bg-yellow-600">More Details <HiArrowSmRight className='ml-1 text-xl' /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
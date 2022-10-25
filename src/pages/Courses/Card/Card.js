import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({category}) => {
    const {img,name, title,id} = category;
    console.log(category)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-96 h-80' src={img} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Course: {title.length < 30 ? title : title.slice(0,30) + '...'}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/course/${id}`}><button className="btn btn-primary">More Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold uppercase'>This is from Home</h2>
            <Link to={'/report'}>
                <button className="btn btn-info">Report</button>
            </Link>
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <h2 className='text-2xl font-bold uppercase'>Welcome to the Product Report Management System (PRMS) Web App</h2>
                <Link to={'/report'}>
                    <button className="btn btn-info btn-sm mt-4">Report</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
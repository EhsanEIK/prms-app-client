import React from 'react';
import { Link } from 'react-router-dom';

const Report = () => {
    return (
        <div>
            <div className='flex justify-between mb-5'>
                <h2 className='text-2xl font-bold uppercase'>Report List</h2>
                <div>
                    <Link to={'/'}>
                        <button className="btn btn-sm btn-error">Home</button>
                    </Link>
                    <Link to={'/addReport'}>
                        <button className="btn btn-sm btn-info ml-2">Create New Report</button>
                    </Link>
                </div>
            </div>
            <div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Floor Numebr</th>
                            <th>Hour</th>
                            <th>Numebr</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Report;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Report = () => {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reports')
            .then(res => res.json())
            .then(data => setReports(data))
    }, [])

    const i = 1;

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
                            <th>SL.</th>
                            <th>Floor Numebr</th>
                            <th>Hour</th>
                            <th>Numebr</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports.map(report => <tr key={report?._id} className="hover">
                                <th>{i++}</th>
                                <td>{report?.floorNumber}</td>
                                <td>{report?.hourNumber}</td>
                                <td>{report?.number}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Report;
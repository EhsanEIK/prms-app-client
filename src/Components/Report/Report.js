import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Report = () => {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reports')
            .then(res => res.json())
            .then(data => setReports(data))
    }, [])

    // handle Delete Button for deleting report from DB
    const handleDeleteReport = id => {
        fetch(`http://localhost:5000/reports/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => toast.success("Report Deleted Successfully!"))
    }

    let i = 1;

    return (
        <div>
            <div className='flex justify-between mb-5'>
                <h2 className='text-2xl font-bold uppercase'>Report List</h2>
                <div>
                    <Link to={'/'}>
                        <button className="btn btn-sm btn-error text-white font-bold">Home</button>
                    </Link>
                    <Link to={'/addReport'}>
                        <button className="btn btn-sm btn-info text-white font-bold ml-2">Create New Report</button>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports.map(report => <tr key={report?._id} className="hover">
                                <th>{i++}</th>
                                <td>{report?.floorNumber}</td>
                                <td>{report?.hourNumber}</td>
                                <td>{report?.number}</td>
                                <td>
                                    <button onClick={() => handleDeleteReport(report?._id)} className="btn btn-accent btn-sm text-white font-bold">DELETE</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Report;
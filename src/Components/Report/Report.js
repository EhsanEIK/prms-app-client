import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Report = () => {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        fetch('https://prms-app-server.vercel.app/reports', {
        })
            .then(res => res.json())
            .then(data => setReports(data))
    }, [])

    // handle Delete Button for deleting report from DB
    const handleDeleteReport = id => {
        fetch(`https://prms-app-server.vercel.app/reports/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => toast.success("Report Deleted Successfully!"))
    }

    // function for considering the status color depends on number
    const status = number => {
        let colorCode = '';
        if (number >= 80) {
            return colorCode = 'bg-green-500';
        }
        else if (number >= 50 && number <= 79) {
            return colorCode = 'bg-yellow-500';
        }
        else {
            return colorCode = 'bg-red-500';
        }
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
                            <th>Number</th>
                            <th>Status</th>
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
                                    <div className={`h-5 w-8 rounded-sm ${status(report?.number)}`}></div>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteReport(report?._id)} className="btn btn-accent btn-sm text-white font-bold">DELETE</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Report;
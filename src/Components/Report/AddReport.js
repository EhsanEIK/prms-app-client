import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AddReport = () => {
    const handleAddReport = event => {
        event.preventDefault();

        const form = event.target;
        const floorNumber = form.floorNumber.value;
        const hourNumber = form.hourNumber.value;
        const number = form.number.value;
        const reportData = { floorNumber, hourNumber, number };

        // add report to the DB via server
        fetch('http://localhost:5000/reports', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportData)
        })
            .then(res => res.json())
            .then(data => toast.success("Report Added Successfully!"))
    }

    return (
        <div>
            <form onSubmit={handleAddReport} className='flex justify-center'>
                <div>
                    <h2 className='text-2xl font-bold uppercase text-center'>Create New Report</h2>
                    <select name='floorNumber' className="select select-info w-full max-w-xs mt-5">
                        <option disabled selected>Select Floor</option>
                        <option>Floor-1</option>
                        <option>Floor-2</option>
                        <option>Floor-3</option>
                        <option>Floor-4</option>
                        <option>Floor-5</option>
                        <option>Floor-6</option>
                        <option>Floor-7</option>
                    </select>
                    <br />
                    <select name='hourNumber' className="select select-info w-full max-w-xs mt-3">
                        <option disabled selected>Select Hour</option>
                        <option>1st-Hour</option>
                        <option>2nd-Hour</option>
                        <option>3rd-Hour</option>
                        <option>4th-Hour</option>
                        <option>5th-Hour</option>
                        <option>6th-Hour</option>
                        <option>7th-Hour</option>
                        <option>8th-Hour</option>
                    </select>
                    <br />
                    <label className="input input-bordered flex items-center gap-2 mt-3">
                        Number
                        <input name='number' type="text" className="grow" placeholder="number" />
                    </label>
                    <Link to={'/report'}>
                        <button className="btn btn-error btn-sm">Back</button>
                    </Link>
                    <button className="btn btn-info btn-sm mt-5 ml-2">Submit</button>
                </div >
            </form >
        </div >
    );
};

export default AddReport;
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="mx-12">
            <div className="navbar bg-base-300 rounded-lg px-8 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold">PRMS Web App</h2>
                </div>
                <div className="navbar-end">
                    <Link to={'/reports'}>
                        <button className="bg-teal-500 font-bold text-lg text-white px-5 py-1 rounded-lg hover:bg-teal-600">Report</button>
                    </Link>
                </div>
            </div>
            <div className='mt-7'>
                <Outlet></Outlet>
            </div>
            <footer className="footer footer-center bg-base-300 text-base-content p-4 mt-[400px]">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - Developed by Ehsan</p>
                </aside>
            </footer>
        </div>
    );
};

export default Main;
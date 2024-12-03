import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-5">
                    <h1 className="text-5xl font-bold">Sign In!</h1>
                    <p className="py-6">
                        Welcome to the Product Report Management System (PRMS) Web App
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white font-bold">Login</button>
                        </div>
                        <label className="mt-1">
                            <p className="label-text-alt text-sm text-center">No account!
                                <Link to={'/signup'} className="link link-hover text-green-600 font-bold ml-1">Create Now</Link>
                            </p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;
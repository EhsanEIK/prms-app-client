import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
    const { createUser } = useContext(AuthContext);

    // sign up handler
    const handleSignup = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('form sign up', email, password)

        createUser(email, password)
            .then(result => {
                toast.success('User Created Successfully!')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-5">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                    <p className="py-6">
                        Welcome to the Product Report Management System (PRMS) Web App
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white font-bold">Signup</button>
                        </div>
                        <label className="mt-1">
                            <p className="label-text-alt text-sm text-center">Have account?
                                <Link to={'/signin'} className="link link-hover text-blue-600 font-bold ml-1">Login Now!</Link>
                            </p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
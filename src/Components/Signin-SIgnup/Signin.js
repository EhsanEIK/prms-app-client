import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Signin = () => {
    const { signInUser } = useContext(AuthContext);

    // redirect to home page after login
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // sign in handler
    const handleSignin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                if (result.user.email) {
                    toast.success("Welcome to the PRMS Web App!")
                    navigate(from, { replace: true });
                }
            })
            .catch(error => {
                toast.error("Wrong information! Please check again.");
            })
    }

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
                    <form onSubmit={handleSignin} className="card-body">
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
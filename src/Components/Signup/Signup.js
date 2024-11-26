import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';

const Signup = () => {
    const { createNewUser, loading, setLoading } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();


    // create new user register handler n firebase
    const handleSignup = event => {
        setErrorMsg('');
        const email = event.target.email.value;
        const password = event.target.password.value;

        // create new user into firebase
        createNewUser(email, password)
            .then(() => {
                toast.success("Registration successful");
                navigate('/login');
            })
            .catch(err => {
                setLoading(false);
                setErrorMsg(err.message);
            });
    }

    // loader
    if (loading) {
        return <Loader></Loader>
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
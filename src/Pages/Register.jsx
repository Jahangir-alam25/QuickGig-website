
import React, { use, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, signInWithGoogle, setUser, updateUser } = use(AuthContext);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/");
                        Swal.fire({
                            title: "Good job! Register Successfully",
                            text: "You clicked the button!",
                            icon: "success"
                        })
                    })
                    .catch((error) => {
                        toast.error(`${error.message}`)
                        setUser(user);
                    });

                // ...
            })
            .catch((error) => {
                
                toast.error(`${error.message}`)
                
            });
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle(provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate("/");
                Swal.fire({
                    title: "Good job! Register Successfully",
                    text: "You clicked the button!",
                    icon: "success"
                })
            })
            .catch((error) => {
                toast.error(`${error.message}`)
               
            })
    }
    return (
        <div className='flex justify-center items-center min-h-screen py-10 dark:bg-gray-800 bg-amber-50'>
            <Helmet>
                <title>Sign Up - QuickGig</title>
            </Helmet>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 dark:bg-gray-800 dark:text-white dark:border">
                <h3 className='font-bold text-2xl text-center'>Sign Up Your Account</h3>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white" placeholder="name" required />
                        {/* Photo url */}
                        <label className="label">Photo Url</label>
                        <input type="text" name='photo' className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white" placeholder="photo url" required />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white" placeholder="Email" required />

                        <label className="label">Password</label>
                        <label className="input validator dark:bg-gray-800 dark:text-white dark:border dark:border-white relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                placeholder="Password"
                                minLength="6"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                            />
                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </label>
                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </p>

                        <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                        <div className="divider">OR</div>
                        <button onClick={handleSignInWithGoogle} type="button" className="btn btn-outline btn-secondary">
                            <FcGoogle size={20}></FcGoogle>
                            Continue with Google
                        </button>
                        <h3 className='font-bold text-center py-2'>Already have an account ? <Link className='text-secondary' to="/auth/login">Login</Link></h3>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
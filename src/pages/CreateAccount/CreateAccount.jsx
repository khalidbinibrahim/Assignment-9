import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub } from 'react-icons/fa';

const CreateAccount = () => {
    const { register, handleSubmit, getValues, reset } = useForm();
    const { createUser, gitHubLogin, googleLogin } = useContext(AuthContext);

    const onSubmit = data => {
        const { password, confirmPassword } = data;
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password do not match");
            return;
        }

        if (!checkPasswordCriteria(password)) {
            toast.error("Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long");
            return;
        }

        toast.success("Password verified successfully");
    };

    const handleCreateAccount = () => {
        const formData = getValues();
        const { password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password do not match");
            return;
        }
    
        if (!checkPasswordCriteria(password)) {
            toast.error("Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long");
            return;
        }
    
        console.log(formData);
        const firstName = formData.firstName;
        const lastName = formData.lastName;
        const fullName = firstName + ' ' + lastName;
        const email = formData.email;
        const PhotoUrl = formData.PhotoUrl;
        console.log(fullName, lastName, email, PhotoUrl);
    
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                res.user.photoURL = PhotoUrl;
                res.user.displayName = fullName;
                toast.success("Account created successfully");
                reset();
            })
            .catch(error => {
                console.error(error);
                toast.error("Error creating account. Please try again.");
            });
    };
    

    const checkPasswordCriteria = password => {
        return /[A-Z]/.test(password) && /[a-z]/.test(password) && password.length >= 6;
    };

    const handleGithubLogin = () => {
        gitHubLogin()
            .then(res =>{
                console.log(res.user);
                toast.success("Logged in with GitHub successfully");
            })
            .catch(error =>{
                console.error(error);
                toast.error("Error logging in with GitHub. Please try again.");
            });
    }
    
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                toast.success("Logged in with Google successfully");
            })
            .catch(error => {
                console.error(error);
                toast.error("Error logging in with Google. Please try again.");
            });
    }

    return (
        <div>
            <ToastContainer />
            <Helmet>
                <title>Luxury | Create Account</title>
            </Helmet>
            <div className='mx-8 lg:mx-96 my-10 px-14 py-8 border rounded-md border-gray-400 font-montserrat'>
                <h1 className='mb-6 font-bold text-black text-2xl'>Create an Account</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <TextField id="standard-basic" label="First Name" variant="standard" className='w-full' type="text" {...register("firstName", { required: true })} />
                    </div>

                    <div className='mb-4'>
                        <TextField id="standard-basic" label="Last Name" variant="standard" className='w-full' type="text" {...register("lastName", { required: true })} />
                    </div>

                    <div className='mb-4'>
                        <TextField id="standard-basic" label="Photo Url" variant="standard" className='w-full' type="url" {...register("PhotoUrl", { required: true })} />
                    </div>
                    <div className='mb-4'>
                        <TextField id="standard-basic" label="Email" variant="standard" className='w-full' type="email" {...register("email", { required: true })} />
                    </div>

                    <div className='mb-4'>
                        <TextField id="standard-basic" label="Password" variant="standard" className='w-full' type="password" {...register("password", { required: true })} />
                    </div>

                    <div className='mb-6'>
                        <TextField id="standard-basic" label="Confirm Password" variant="standard" className='w-full' type="password" {...register("confirmPassword", { required: true })} />
                    </div>

                    <div className='my-4'>
                        <button type="submit" className="btn w-full bg-[#FBB804] font-montserrat text-black font-bold px-7 text-center rounded-md border-none" onClick={handleCreateAccount}>Create an account</button>
                    </div>
                </form>
                <p className='text-black font-bold text-center'>Already have an account? <NavLink to="/login" className="text-[#FBB804] border-b border-[#FBB804] font-semibold">Login</NavLink></p>
            </div>

            <div className='mb-6 font-montserrat'>
                <p className='text-black text-center font-bold'>Or</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-4 font-montserrat'>
                <a onClick={handleGithubLogin} className="btn btn-outline text-black bg-white rounded-3xl border-gray-400 px-10 py-auto font-bold w-[460px]"><FaGithub className='text-2xl' /> Continue with Github</a>
                <a onClick={handleGoogleLogin} className="btn btn-outline text-black bg-white rounded-3xl border-gray-400 px-10 py-auto font-bold w-[460px]"><FcGoogle className='text-2xl' /> Continue with Google</a>
            </div>
        </div>
    );
};

export default CreateAccount;

import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAccount = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

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
        toast.success("Account created successfully");
    };

    const checkPasswordCriteria = password => {
        return /[A-Z]/.test(password) && /[a-z]/.test(password) && password.length >= 6;
    };

    return (
        <div>
            <ToastContainer />
            <Helmet>
                <title>Luxury | Create Account</title>
            </Helmet>
            <div className='mx-8 lg:mx-96 my-10 px-14 py-6 border rounded-md border-gray-400'>
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
                        <button type="submit" className="btn w-full bg-[#FBB804] text-black font-semibold px-7 text-center rounded-md border-none" onClick={handleCreateAccount}>Create an account</button>
                    </div>
                </form>
                <p className='text-black font-medium text-center'>Already have an account? <NavLink to="/login" className="text-[#FBB804] border-b border-[#FBB804]">Login</NavLink></p>
            </div>

            <div className='mb-6'>
                <p className='text-black text-center font-medium'>Or</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-4'>
                <a className="btn btn-outline text-black bg-white rounded-3xl border-gray-400 px-10 py-auto font-medium w-[460px]"><FaFacebook className='text-blue-700 text-2xl' /> Continue with Facebook</a>
                <a className="btn btn-outline text-black bg-white rounded-3xl border-gray-400 px-10 py-auto font-medium w-[460px]"><FcGoogle className='text-2xl' /> Continue with Facebook</a>
            </div>
        </div>
    );
};

export default CreateAccount;

import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <Helmet>
                <title>Luxury | Login</title>
            </Helmet>
            <div className='mx-8 lg:mx-96 my-10 px-14 py-6 border rounded-md border-gray-400'>
                <h1 className='mb-6 font-bold text-black text-2xl'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <TextField id="standard-basic" label="Email" variant="standard" className='w-full' type="email" {...register("Email", { required: true })} />
                    </div>

                    <div className='mb-4'>
                        <TextField id="standard-basic" label="Password" variant="standard" className='w-full' type="password" {...register("Password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/i })} />
                    </div>

                    <div className='flex justify-between my-6'>
                        <div className='flex gap-2'>
                            <input type="checkbox" placeholder="Remember Me" {...register} />
                            <p className='text-black font-medium'>Remember Me</p>
                        </div>
                        <a className="text-[#FBB804] border-b border-[#FBB804] font-medium">Forgot Password</a>
                    </div>

                    <div className='my-4'>
                        <a className="btn w-full bg-[#FBB804] text-black font-semibold px-7 text-center rounded-md border-none">Login</a>
                    </div>
                </form>
                <p className='text-black font-medium text-center'>Do not have an account? <NavLink to="/create_account" className="text-[#FBB804] border-b border-[#FBB804]">Create an account</NavLink></p>
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

export default Login;
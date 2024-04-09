import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const CreateAccount = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <div className='mx-8 lg:mx-96 my-10 px-14 py-6 border rounded-md border-gray-400'>
                <h1 className='mb-6 font-bold text-black text-2xl'>Create an Account</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <TextField id="standard-basic" label="First Name" variant="standard" className='w-full' type="text" {...register("First Name", { required: true })} />
                    </div>

                    <div className='mb-3'>
                        <TextField id="standard-basic" label="Last Name" variant="standard" className='w-full' type="text" {...register("Last Name", { required: true })} />
                    </div>

                    <div className='mb-3'>
                        <TextField id="standard-basic" label="Email" variant="standard" className='w-full' type="email" {...register("Email", { required: true })} />
                    </div>

                    <div className='mb-3'>
                        <TextField id="standard-basic" label="Password" variant="standard" className='w-full' type="password" {...register("Password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/i })} />
                    </div>

                    <div className='mb-6'>
                        <TextField id="standard-basic" label="Confirm Password" variant="standard" className='w-full' type="password" {...register("Confirm Password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/i })} />
                    </div>

                    <div className='my-4'>
                        <a className="btn w-full bg-[#FBB804] text-black font-semibold px-7 text-center rounded-md border-none">Create an account</a>
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
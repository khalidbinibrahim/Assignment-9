import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { register, handleSubmit, getValues, reset } = useForm();
    const { loginUser, gitHubLogin, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
    }

    const handleSignIn = () => {
        const formData = getValues();
        console.log(formData);
        const email = formData.Email;
        const password = formData.Password;
        console.log(email, password)
        loginUser(email, password)
            .then(res => {
                console.log(res.user);
                toast.success("Logged in user successfully");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error("Error logging in user. Please try again.");
            })
        reset();
    }

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
        <div className='mb-10'>
            <Helmet>
                <title>Luxury | Login</title>
            </Helmet>
            <div className='mx-8 lg:mx-96 my-10 px-14 py-8 border rounded-md border-gray-400 font-montserrat'>
                <h1 className='mb-6 font-bold text-black text-2xl'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <TextField id="standard-basic" label="Email" variant="standard" className='w-full' type="email" {...register("Email", { required: true })} />
                    </div>

                    <div className='mb-6'>
                        <TextField id="standard-basic" label="Password" variant="standard" className='w-full' type="password" {...register("Password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/i })} />
                    </div>

                    <div className='flex justify-between my-6'>
                        <div className='flex gap-2'>
                            <input type="checkbox" placeholder="Remember Me" {...register} />
                            <p className='text-black font-bold'>Remember Me</p>
                        </div>
                        <a className="text-[#FBB804] hover:border-b hover:border-[#FBB804] font-semibold">Forgot Password</a>
                    </div>

                    <div className='my-4'>
                        <button type="submit" className="btn w-full bg-[#FBB804] font-montserrat text-black font-bold px-7 text-center rounded-md border-none" onClick={handleSignIn}>Login</button>
                    </div>
                </form>
                <p className='text-black font-bold text-center'>Do not have an account? <NavLink to="/create_account" className="text-[#FBB804] hover:border-b hover:border-[#FBB804] font-semibold">Create an account</NavLink></p>
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

export default Login;
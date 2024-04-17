import { TextField } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);
    const { register, getValues, reset } = useForm();

    const handleUpdateProfile = () =>{
        const formData = getValues();
        console.log(formData)

        const fullName = formData.fullName;
        const photoUrl = formData.PhotoUrl;

        updateUserProfile(fullName, photoUrl)
        .then(res =>{
            console.log(res);
            reset();
            toast.success('User profile Updated');
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className='mx-8 lg:mx-96 my-10 px-14 py-8 border rounded-md border-gray-400 font-montserrat'>
            <h1 className='mb-6 font-bold text-black text-2xl'>Update Profile</h1>
            <form onSubmit={handleUpdateProfile}>
                <div className='mb-4'>
                    <TextField id="standard-basic" label="Full Name" variant="standard" className='w-full' type="text" {...register("fullName", { required: true })} />
                </div>

                <div className='mb-4'>
                    <TextField id="standard-basic" label="Photo Url" variant="standard" className='w-full' type="url" {...register("PhotoUrl", { required: true })} />
                </div>

                <div className="my-4">
                    <button type="submit" className="btn w-full bg-[#FBB804] font-montserrat text-black font-bold px-7 text-center rounded-md border-none" onClick={handleUpdateProfile}>Update Profile</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;
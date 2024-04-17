import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
    const { register, handleSubmit, getValues, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    const handleUpdateProfile = () =>{
        const formData = getValues();
        console.log(formData)

        const fullName = formData.lastName;
        const photoUrl = formData.PhotoUrl;
    }

    return (
        <div className='mx-8 lg:mx-96 my-10 px-14 py-8 border rounded-md border-gray-400 font-montserrat'>
            <h1 className='mb-6 font-bold text-black text-2xl'>Update Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <TextField id="standard-basic" label="Full Name" variant="standard" className='w-full' type="text" {...register("lastName", { required: true })} />
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
import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const MyProfile = () => {
  const { register, handleSubmit } = useForm();
  const { user, loading, updateUser } = useAuth();
  const [nameState, setNameState] = useState(user?.displayName || "");
  const [image, setImage] = useState(user?.photoURL || "");
  if (loading) {
    return <span className="loading loading-spinner loading-sm"></span>;
  }

  const handleUpdate = (data) => {
    const updateUserInfo = {
      displayName: data.name,
      photoURL: data.photo,
    };

    updateUser(updateUserInfo)
      .then(() => {
        toast("Profile updated");
        setNameState(data.name);
        setImage(data.photo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:w-[700px] md:h-[400px] mx-auto ">
      <h1 className="font-semibold text-3xl mb-4 ">My Profile</h1>
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-around   bg-primary rounded-2xl py-5 md:p-10">
        <div className=" w-full md:w-[250px] text-white font-semibold    pr-0 mr-0  break-words px-5 md:px-0">
          <img
            className="rounded-2xl object-cover h-40 w-40"
            src={image}
            alt="Users photo"
          />
          <div className="text-wrap md:w-[200px] ">
            <h1 className="text-[15px]">{nameState}</h1>
            <h1 className="text-[15px] break-words">{user.email}</h1>
          </div>
        </div>
        <div className=" md:w-[300px]">
          <h1 className=" text-2xl md:text-start text-center font-semibold text-white">
            Update Info
          </h1>

          <form onSubmit={handleSubmit(handleUpdate)}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                {...register("name")}
                required
              />
              <label className="label">Image</label>
              <input
                type="text"
                className="input"
                placeholder="URL"
                required
                {...register("photo")}
              />

              <button className="btn bg-gray-500 border-0 text-white mt-4 ">
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyProfile;

import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

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
        // alert("user updated successfully");
        setNameState(data.name);
        setImage(data.photo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-7/12 h-[400px] mx-auto ">
      <h1 className="font-semibold text-3xl mb-4">My Profile</h1>
      <div className="flex  items-center justify-around   bg-orange-500 rounded-2xl p-10">
        <div className="  text-white font-semibold  border-r-2 border-gray-200 pr-15">
          <img className="rounded-2xl w-40" src={image} alt="Users photo" />
          <h1 className="text-[15px]">{nameState}</h1>
          <h1 className="text-[15px]">{user.email}</h1>
        </div>
        <div className=" w-[300px]">
          <h1 className=" text-2xl font-semibold text-white">Update Info</h1>

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

              <button className="btn bg-gray-500 border-0 text-white mt-4">Update</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

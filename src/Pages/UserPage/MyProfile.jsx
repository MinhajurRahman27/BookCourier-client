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
    <div className="w-7/12 h-[400px] mx-auto border">
      <h1 className="font-semibold text-4xl ">My Profile</h1>
      <div className="flex gap-4 items-start border mt-5 p-10">
        <div className="border">
          <img className="rounded w-40" src={image} alt="Users photo" />
          <h1 className="text-[15px]">{nameState}</h1>
          <h1 className="text-[15px]">{user.email}</h1>
        </div>
        <div>
          <h1 className="text-primary text-xl font-semibold">Update Info</h1>

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

              <button className="btn btn-primary mt-4">Update</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

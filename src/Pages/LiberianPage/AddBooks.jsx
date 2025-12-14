import React from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";

const AddBooks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const handleAddBook = (data) => {
    // console.log(data);
    data.email = user.email;
    axiosSecure
      .post("/books", data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          toast("book added successfully");
        }
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  return (
    <div>
      <div className="card-body  bg-orange-500 md:w-[600px] mx-auto rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Add Book</h1>
        <form onSubmit={handleSubmit(handleAddBook)}>
          <fieldset className="fieldset">
            <label className="label text-white font-semibold">Book Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Book Name"
              {...register("bookname")}
              required
            />
            <label className="label text-white font-semibold">Book Image</label>
            <input
              type="text"
              {...register("bookimage")}
              className="input w-full"
              placeholder="URL"
            />

            <label className="label text-white font-semibold">
              Book Author
            </label>
            <input
              type="text"
              className="input w-full "
              placeholder="Book Author"
              {...register("author")}
              required
            />

            {/* status section will be here */}
            <label className="label text-white font-semibold">
              Select Status
            </label>
            <select
              defaultValue="Pick a color"
              className="select appearance-none w-full"
              {...register("status")}
            >
              <option disabled={true}>Select Status</option>
              <option>Published</option>
              <option>Unpublished</option>
            </select>

            <label className="label text-white font-semibold">Price</label>
            <input
              type="number"
              className="input w-full"
              required
              placeholder="Price"
              {...register("price")}
            />

            <button className="btn btn-neutral mt-4 hover:opacity-90">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddBooks;

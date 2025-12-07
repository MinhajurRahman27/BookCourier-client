import React from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";

const AddBooks = () => {
  const axiosSecure = useAxios();
  const { register, handleSubmit } = useForm();
  const handleAddBook = (data) => {
    console.log(data);
    axiosSecure
      .post("/books", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("book added successfully");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      add bookjs
      <div className="card-body">
        <h1 className="text-5xl font-bold">Add Book</h1>
        <form onSubmit={handleSubmit(handleAddBook)}>
          <fieldset className="fieldset">
            <label className="label">Book Name</label>
            <input
              type="text"
              className="input"
              placeholder="Book Name"
              {...register("bookname")}
              required
            />
            <label className="label">Book Image</label>
            <input
              type="text"
              {...register("bookimage")}
              className="input"
              placeholder="URL"
            />

            <label className="label">Book Author</label>
            <input
              type="text"
              className="input"
              placeholder="Book Author"
              {...register("author")}
              required
            />

            {/* status section will be here */}
            <label className="label">Select Status</label>
            <select
              defaultValue="Pick a color"
              className="select appearance-none"
              {...register("status")}
            >
              <option disabled={true}>Select Status</option>
              <option>Published</option>
              <option>Unpublished</option>
            </select>

            <label className="label">Price</label>
            <input
              type="number"
              className="input"
              required
              placeholder="Price"
              {...register("price")}
            />

            <button className="btn btn-neutral mt-4">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;

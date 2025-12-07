import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import { useForm } from "react-hook-form";

const Editbooks = () => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxios();
  const { id } = useParams();
  console.log(id);

  const { data: book = [] } = useQuery({
    queryKey: ["editbook"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/book-edit/${id}`);
      return res.data;
    },
  });

  const handleEdit = (data) => {
    console.log(data);
    const finalData = {
      bookname: data.bookname || book.bookname,
      bookimage: data.bookimage || book.bookimage,
      author: data.author || book.author,
      status: data.status || book.status,
      price: data.price || book.price,
    };

    axiosSecure.patch(`/books-edit/${id}`, finalData).then((res) => {
      if (res.data.modifiedCount) {
        alert("modified");
        console.log(res.data);
      }
    });
  };
  return (
    <div>
      id: {id} <br />
      <h1 className="text-4xl text-primary">Edit</h1>
      <div className="flex justify-between border w-7/12 mx-auto">
        <div className="card-body border">
          <h1 className="text-5xl font-bold">Add Book</h1>
          <form onSubmit={handleSubmit(handleEdit)}>
            <fieldset className="fieldset">
              <label className="label">Book Name</label>
              <input
                type="text"
                className="input"
                placeholder="Book Name"
                defaultValue={book.bookname}
                {...register("bookname")}
                required
              />
              <label className="label">Book Image</label>
              <input
                type="text"
                defaultValue={book.bookimage}
                {...register("bookimage")}
                className="input"
                placeholder="URL"
              />

              <label className="label">Book Author</label>
              <input
                type="text"
                className="input"
                placeholder="Book Author"
                defaultValue={book.author}
                {...register("author")}
                required
              />

              {/* status section will be here */}
              <label className="label">Select Status</label>
              <select
                defaultValue={book.status}
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
                defaultValue={book.price}
                placeholder="Price"
                {...register("price")}
              />

              <button className="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </form>
        </div>

        <div className="w-[50%] flex items-center justify-center">
          <img className="w-50 rounded-2xl" src={book.bookimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Editbooks;

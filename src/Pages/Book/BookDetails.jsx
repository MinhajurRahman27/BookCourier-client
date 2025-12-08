import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const BookDetails = () => {
  const { register, handleSubmit } = useForm();
  const { user, loading } = useAuth();
  const axiosSecure = useAxios();
  const { id } = useParams();
  const { data: book } = useQuery({
    queryKey: ["singlebook"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/book-edit/${id}`);
      return res?.data;
    },
  });
  console.log(book);

  if (loading) {
    return <span class="loading loading-spinner loading-sm"></span>;
  }

  const handleOrderForm = (data) => {
    data.bookId = id;
    console.log(data);
    axiosSecure.post("/order", data).then((res) => {
      if (res.data.insertedId) {
        alert("saved to database");
      }
    });

    document.getElementById("my_modal_5").close();
  };

  return (
    <div>
      <div className=" flex pt-10  gap-3 px-50 ">
        <div className="">
          <img className="w-250 h-100" src={book.bookimage} alt="" />
        </div>
        <div className=" pt-9">
          <h1 className="text-3xl font-bold">{book.bookname}</h1>
          {/* ratings will be here */}

          <div className="my-5">
            <h1 className="text-secondary">Written By</h1>
            <h1 className="text-[30px] font-semibold">{book.author}</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            nulla perspic ipsum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Numquam aliquam inventore labore, hic saepe
            laudantium architecto eos.
            <br /> Eum, possimus maxime. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Alias sequi vero ut, aspernatur obcaecati ab atque
            dolorem minus! Suscipit error optio, minus voluptate quam quos deto
            in nisi, non, velit esse ipsa voluptatibus natus voluptatum nam?
            Dolorem totam veniam dicta, fugiat odit cum.
          </p>

          <div className="flex items-center justify-between mt-5">
            <h1 className="font-bold text-orange-500 text-3xl">
              ${book.price}
            </h1>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn rounded text-white w-[300px] bg-orange-500"
            >
              Order
            </button>
          </div>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex items-center justify-center">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleOrderForm)}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                readOnly
                defaultValue={user.displayName}
                {...register("name")}
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                defaultValue={user.email}
                readOnly
                {...register("email")}
              />
              <label className="label">Phone Number</label>
              <input
                type="text"
                className="input"
                placeholder="Phone Number"
                {...register("number")}
              />
              <label className="label">Address</label>
              <input
                type="text"
                className="input"
                placeholder="Address"
                {...register("address")}
              />
            </fieldset>
            <button className="btn rounded text-white w-[300px] bg-orange-500">
              Order Now
            </button>
          </form>
          {/* <div className="modal-action">
            <form method="dialog">
              
               <button className="btn">Close</button>
            </form>
          </div> */}
        </div>
      </dialog>
    </div>
  );
};

export default BookDetails;

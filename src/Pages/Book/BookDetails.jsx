import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import UserReview from "../UserPage/UserReview";
import Spinner from "../../components/Spinner";
import { toast, ToastContainer } from "react-toastify";

const BookDetails = () => {
  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [showReview, setShowRewiew] = useState(false);
  const axiosSecure = useAxios();
  const { id } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const { data: book } = useQuery({
    queryKey: ["singlebook"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/book-edit/${id}`);
      return res?.data;
    },
  });
  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["alllreviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${id}`);
      setShowRewiew(true);
      return res?.data;
    },
  });
  // console.log(reviews);

  if (loading) {
    return <Spinner></Spinner>;
  }
  console.log(book);

  const handleOrderForm = (data) => {
    const date = new Date().toLocaleDateString();
    data.bookId = id;
    data.provider = book.email;
    data.bookname = book?.bookname;
    data.date = date;
    data.price = book?.price;
    // console.log(data);
    axiosSecure.post("/order", data).then((res) => {
      if (res.data.insertedId) {
        toast("Order placed");
        document.getElementById("my_modal_2").showModal();
      }
    });

    document.getElementById("my_modal_5").close();
  };

  const handleWishlist = (book) => {
    const bookInfo = {
      bookId: id,
      bookname: book.bookname,
      bookimage: book.bookimage,
      author: book.author,
      status: book.status,
      price: book.price,
      date: new Date().toLocaleDateString(),
    };
    // console.log("whislist");

    axiosSecure
      .post(`/user-wishlist/${user.email}`, bookInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast("Added to wishlist");
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleReview = (data) => {
    // console.log(data);
    const review = {
      bookId: book._id,
      name: user.displayName,
      image: user.photoURL,
      comment: data.review,
      date: new Date().toLocaleDateString(),
    };

    // console.log(review);
    axiosSecure
      .post("/review", review)
      .then((res) => {
        if (res.data.insertedId) {
          refetch();
          document.getElementById("my_modal_2").close();
          alert("added to review");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="mb-20">
      <div className=" flex flex-col  md:items-start md:flex-row pt-10  gap-3 lg:px-50 ">
        <div className="px-5 md:px-0">
          <img className="md:w-250 h-100" src={book?.bookimage} alt="" />
        </div>
        <div className=" pt-0  px-5 md:p-0">
          <h1 className="text-3xl font-bold">{book?.bookname}</h1>
          {/* ratings will be here */}

          <div className="my-5">
            <h1 className="text-secondary font-semibold">Written By</h1>
            <h1 className="text-[20px] font-semibold">{book?.author}</h1>
          </div>
          <p className="md:w-[500px]  md:h-[165px]">
            <p className="text-gray-500 font-semibold">
              This book offers an engaging and insightful journey into its
              subject, combining clear explanations with practical examples.
              Carefully structured and easy to follow, it provides readers with
              both knowledge and inspiration. <br /> Whether you are reading for
              learning or leisure, this book is a valuable addition to your
              collection, offering lessons and perspectives that stay with you
              long after the last page.
            </p>
          </p>

          <div className="flex flex-col md:flex-row md:items-center justify-between mt-5 ">
            <h1 className="font-bold  text-3xl">${book?.price}</h1>
            <div className="flex flex-col  md:flex-row gap-2">
              <button
                onClick={() => handleWishlist(book)}
                className="btn rounded text-white  md:w-[200px] bg-orange-500"
              >
                Add to Wishlist
              </button>
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn rounded text-white  md:w-[200px] bg-orange-500"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        {showReview ? (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-3 lg:px-50">
              {reviews?.map((r) => (
                <UserReview key={r?._id} r={r}></UserReview>
              ))}
            </div>{" "}
          </>
        ) : (
          " "
        )}
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
                defaultValue={user?.displayName}
                {...register("name")}
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                defaultValue={user?.email}
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
      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex items-center justify-center">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form method="dialog" onSubmit={handleSubmit2(handleReview)}>
            <h1 className="text-2xl text-center  ">Give us a Review</h1>
            <fieldset>
              <textarea
                className="textarea my-5"
                placeholder="Write...."
                {...register2("review")}
              ></textarea>
            </fieldset>
            <button className="btn rounded text-white w-[300px] bg-orange-500">
              Submit
            </button>
          </form>
          {/* <div className="modal-action">
            <form method="dialog">
              
               <button className="btn">Close</button>
            </form>
          </div> */}
        </div>
      </dialog>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetails;

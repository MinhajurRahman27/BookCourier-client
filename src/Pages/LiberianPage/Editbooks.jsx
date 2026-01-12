import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const Editbooks = () => {
  
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxios();
  const { id } = useParams();
  // console.log(id);

  const { data: book = [] } = useQuery({
    queryKey: ["editbook"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/book-edit/${id}`);
      return res.data;
    },
  });

  const handleEdit = (data) => {
    // console.log(data);
    const finalData = {
      bookname: data.bookname,
      bookimage: data.bookimage,
      author: data.author,
      description: data.description,
      status: data.status,
      price: data.price,
    };

    axiosSecure.patch(`/books-edit/${id}`, finalData).then((res) => {
      if (res.data.modifiedCount) {
        reset();
        toast("Book modified");

        // console.log(res.data);
      }
    });
  };
  return (
    <div>
      <div className=" bg-primary  rounded-xl md:w-[600px] mx-auto ">
        <div className="card-body  ">
          <h1 className="text-5xl font-bold text-white">Edit Book</h1>
          <form onSubmit={handleSubmit(handleEdit)}>
            <fieldset className="fieldset">
              <label className="label text-white font-semibold">
                Book Name
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Book Name"
                {...register("bookname")}
                required
              />
              <label className="label text-white font-semibold">
                Book Image
              </label>
              <input
                type="text"
                {...register("bookimage")}
                className="input w-full"
                placeholder="URL"
                required
              />

              <label className="label text-white font-semibold">
                Book Author
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Book Author"
                {...register("author")}
                required
              />

              <label className="label text-white font-semibold">
                Book Description
              </label>
              <textarea
                className="textarea w-full min-h-[120px] resize-none"
                placeholder="Enter a detailed description of the book..."
                {...register("description")}
                rows="5"
              ></textarea>

              {/* status section will be here */}
              <label className="label text-white font-semibold">
                Select Status
              </label>
              <select
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

              <button className="bg-primary border-b-1 text-white px-6 py-3 rounded-3xl mt-4 hover:opacity-90 font-semibold cursor-pointer">Submit</button>
            </fieldset>
          </form>
        </div>

        {/* <div className="w-[50%] hidden  md:flex items-center justify-center">
          <img className="w-55 rounded-2xl" src={book.bookimage} alt="" />
        </div> */}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Editbooks;

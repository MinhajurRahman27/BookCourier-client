import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const GetInTouch = () => {
  const handleForm = (e) => {
    e.preventDefault();

    toast("Message Sent");
    e.target.reset();
  };
  return (
    <div className="mb-25">
      <div>
        <div className="mb-15">
          <h1 className="text-2xl md:text-5xl font-semibold text-center  mb-3">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-400 text-center">
            Have questions? We'd love to hear from you
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center  gap-20">
          <div className="shadow-orange-500 shadow-2xl p-5 rounded-2xl">
            {/* form */}

            <form onSubmit={(e) => handleForm(e)}>
              <fieldset className="fieldset">
                <label className="label font-semibold text-[16px]">Name</label>
                <input
                  type="text"
                  className="input rounded-2xl"
                  placeholder="Name"
                />
                <label className="label font-semibold text-[16px]">Email</label>
                <input
                  type="email"
                  className="input rounded-2xl"
                  placeholder="Email"
                />
                <label className="label font-semibold text-[16px]">
                  Subject
                </label>
                <input
                  type="text "
                  className="input rounded-2xl"
                  placeholder="Subject"
                />
                <label className="label font-semibold text-[16px]">
                  Message
                </label>
                <textarea
                  className="textarea rounded-2xl"
                  placeholder="Message"
                ></textarea>
              </fieldset>
              <button className="btn rounded-2xl text-white w-[300px] bg-orange-500">
                Order Now
              </button>
            </form>
          </div>
          <div>
            {/* animation */}
            <MdOutlineMessage className="text-[300px] text-orange-500 animate-bounce" />
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default GetInTouch;

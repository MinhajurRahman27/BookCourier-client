import React from "react";
import { MdOutlineMessage } from "react-icons/md";

const GetInTouch = () => {
  const handleForm = (e) => {
    e.preventDefault();

    alert("submited");
    e.target.reset();
  };
  return (
    <div>
      <div>
        <div className="mb-15">
          <h1 className="text-5xl font-semibold text-center  mb-3">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-400 text-center">
            Have questions? We'd love to hear from you
          </p>
        </div>
        <div className="flex items-center justify-center  gap-20">
          <div className="shadow-orange-500 shadow-2xl p-5 rounded-2xl">
            {/* form */}

            <form onSubmit={(e) => handleForm(e)}>
              <fieldset className="fieldset">
                <label className="label font-semibold text-[16px]">Name</label>
                <input type="text" className="input" placeholder="Name" />
                <label className="label font-semibold text-[16px]">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label font-semibold text-[16px]">
                  Subject
                </label>
                <input type="text" className="input" placeholder="Subject" />
                <label className="label font-semibold text-[16px]">
                  Message
                </label>
                <textarea className="textarea" placeholder="Message"></textarea>
              </fieldset>
              <button className="btn rounded text-white w-[300px] bg-orange-500">
                Order Now
              </button>
            </form>
          </div>
          <div>{/* animation */}
            <MdOutlineMessage className="text-[300px] text-orange-500 animate-bounce"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

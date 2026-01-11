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
          <h1 className="text-2xl md:text-4xl font-semibold text-center  mb-3">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-400 text-center">
            Have questions? We'd love to hear from you
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto px-6">
          <div className="w-full lg:w-1/2 shadow-lg hover:shadow-xl transition-all duration-300 p-8 rounded-2xl border border-gray-100">
            {/* form */}

            <form onSubmit={(e) => handleForm(e)} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-3xl transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            {/* animation */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <MdOutlineMessage className="relative text-[200px] lg:text-[300px] text-primary animate-bounce drop-shadow-lg" />
            </div>
            <div className="text-center mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">We're Here to Help!</h3>
              <p className="text-gray-600 max-w-md">
                Have questions about our books or services? Drop us a message and we'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default GetInTouch;

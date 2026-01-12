import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
  const [err, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const axiosSecure = useAxios();
  const { createUser, updateUser, signwithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  const formsubmit = (data) => {
    const email = data.email;
    const password = data.pass;
    const photoUrl = data.photo;
    const name = data.name;

    createUser(email, password)
      .then((res) => {
        navigate(location.state || "/");

        reset();

        const userInfo = {
          email: data.email,
          displayName: data.name,
          photoURL: data.photo,
        };

        //sending user to backend
        axiosSecure.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            // alert("user inserted successfully");
          }
        });

        const updateUserInfo = {
          displayName: name,
          photoURL: photoUrl,
        };

        updateUser(updateUserInfo)
          .then(() => {
            // alert("user updated successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const googlesubmit = () => {
    signwithGoogle()
      .then((res) => {
        navigate(location.state || "/");
        const userInfo = {
          email: res.user.email,
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        };

        //sending user to backend

        axiosSecure.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            // alert("user inserted successfully");
          }
        });

        const updateUserInfo = {
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        };

        updateUser(updateUserInfo)
          .then(() => {
            // console.log("user updated successfully");
          })
          .catch((error) => {
            // console.log(error);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="pt-20 py-10 md:p-10 md:pt-20 flex items-center">
      <div className="  flex w-full justify-center">
        <div className="card sm:w-[500px] w-full  bg-primary  sm:p-5">
          <div className="card-body  ">
            <h1 className="text-4xl font-semibold text-white">Register</h1>
            <form onSubmit={handleSubmit(formsubmit)}>
              <fieldset className="fieldset">
                <label className="label font-semibold text-white">Name</label>
                <input
                  type="text"
                  className="input rounded-2xl w-full"
                  placeholder="Name"
                  {...register("name")}
                  required
                />
                <label className="label font-semibold text-white">Image</label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  className="input rounded-2xl w-full"
                  placeholder="your photo URL"
                />
                {errors.photo?.type === "required" && (
                  <p className="text-red-800">photo is required</p>
                )}

                <label className="label font-semibold text-white">Email</label>
                <input
                  type="email"
                  className="input rounded-2xl w-full"
                  placeholder="Email"
                  {...register("email")}
                  required
                />
                <label className="label font-semibold text-white">
                  Password
                </label>
                <input
                  type="password"
                  className="input rounded-2xl w-full"
                  required
                  placeholder="Password"
                  {...register("pass", {
                    pattern: {
                      value: passwordRegex,
                      message:
                        "Password must be 6+ chars, include uppercase, lowercase, number & special char",
                    },
                  })}
                />
                 {errors.pass && (
                <p className="text-white">{errors.pass.message}</p>
              )}

                <button className="btn rounded-2xl w-full btn-white mt-4 border-none">
                  Register
                </button>
              </fieldset>
             
            </form>
            <button
              onClick={googlesubmit}
              className="btn rounded-2xl w-full bg-white text-black border-none"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className="font-semibold text-white text-center">
              Already have an account!
              <Link
                state={location.state}
                className="text-sky-500 ml-1 font-semibold"
                to="/login"
              >
                Login
              </Link>
            </p>
            <p className="font-semibold text-gray-400 text-center">{err}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

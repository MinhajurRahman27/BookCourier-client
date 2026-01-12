import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [err, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const axiosSecure = useAxios();

  const { signIn, signwithGoogle, updateUser } = useAuth();
  const { register, handleSubmit } = useForm();

  const formsubmit = (data) => {
    // console.log(data);
    const email = data.email;
    const password = data.pass;

    signIn(email, password)
    
      .then((res) => {
        setLoading(true)
        // setLoading(false)
        navigate(location?.state || "/");
        setLoading(false)
        
        const user = res.user;

        const userInfo = {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };

        //sending user to backend
        axiosSecure.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            // alert("user inserted successfully");
          }
        });
      })
      .catch((err) => {
       
        setError(err.message);
        //  setLoading(false)
       
      });
  };

  const googlesubmit = () => {
    signwithGoogle()
      .then((res) => {
        navigate(location?.state || "/");
        const userInfo = {
          email: res.user.email,
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        };

        //sending user to backend

        axiosSecure.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            alert("user inserted successfully");
          }
        });

        const updateUserInfo = {
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        };

        updateUser(updateUserInfo)
          .then(() => {
            console.log("user updated successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleDemoLogin = (role) => {
    let demoCredentials;
    
    switch(role) {
      case 'admin':
        demoCredentials = { email: 'admin@gmail.com', password: '123Asd!@' };
        break;
      case 'librarian':
        demoCredentials = { email: 'librarian1@gmail.com', password: '123Asd!@' };
        break;
      case 'user':
        demoCredentials = { email: 'user1@gmail.com', password: '123Asd!@' };
        break;
      default:
        return;
    }

    signIn(demoCredentials.email, demoCredentials.password)
      .then((res) => {
        navigate(location?.state || "/");
        const user = res.user;

        const userInfo = {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };

        axiosSecure.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            // alert("user inserted successfully");
          }
        });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="pt-10 sm:pt-20 w-full  flex items-center ">
      
      <div className=" flex items-center center w-[500px]  mx-auto bg-primary sm:rounded-2xl p-5">
        <div className="card w-full ">
          <div className="card-body">
            <h1 className="text-4xl font-semibold text-white">Login</h1>
            
            {/* Demo Credentials Section */}
            <div className="mb-6">
             
              <div className="grid mt-6 grid-cols-1 gap-2">
                <button
                  onClick={() => handleDemoLogin('admin')}
                  className="btn bg-primary hover:bg-primary/80 text-white border-none rounded-2xl"
                >
                  Login as Admin
                </button>
                <button
                  onClick={() => handleDemoLogin('librarian')}
                  className="btn bg-primary hover:bg-primary/80 text-white border-none rounded-2xl"
                >
                  Login as Librarian
                </button>
                <button
                  onClick={() => handleDemoLogin('user')}
                  className="btn bg-primary hover:bg-primary/80 text-white border-none rounded-2xl"
                >
                  Login as User
                </button>
              </div>
              <div className="divider text-white">OR</div>
            </div>

            <form onSubmit={handleSubmit(formsubmit)}>
              <fieldset className="fieldset">
                <label className="label font-semibold text-white">Email</label>
                <input
                  type="email"
                  className="input w-full rounded-2xl"
                  placeholder="Email"
                  {...register("email")}
                  required
                />
                <label className="label font-semibold text-white">
                  Password
                </label>
                <input
                  type="password"
                  className="input w-full rounded-2xl"
                  placeholder="Password"
                  required
                  {...register("pass")}
                />
                {/* <div>
                  <a className="link link-hover font-semibold text-white">
                    Forgot password?
                  </a>
                </div> */}
                <p className="font-semibold text-center text-white">{err}</p>
                <button className="btn btn-white mt-4 rounded-2xl border-none">
                  {loading?<> <span className="loading loading-spinner  loading-xs"></span> </>: "Login"}
                </button>
              </fieldset>
            </form>
            <button
              onClick={googlesubmit}
              className="btn rounded-2xl bg-white text-black border-none"
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
              Don't have an account!
              <Link
                state={location.state}
                className="text-sky-500  hover:text-blue-800 font-semibold ml-1"
                to="/register"
              >
                Register Now
              </Link>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

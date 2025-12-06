import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  const formsubmit = (data) => {
    console.log(data);

    // if(passwordRegex.test(data.pass)){

    // }
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register</h1>
        <form onSubmit={handleSubmit(formsubmit)}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              {...register("name")}
              required
            />
            <label className="label">Photo</label>
            <input
              type="text"
              className="input"
              placeholder="PhotoUrl"
              {...register("photoURL")}
              required
            />
            {/* <input
              type="file"
              name="photo"
              class="file-input file-input-bordered file-input-primary w-full max-w-xs"
            /> */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register("email")}
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
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

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          {errors.pass && <p className="text-red-500">{errors.pass.message}</p>}
          <p>
            Already have an account!
            <Link className="text-blue-500 font-semibold" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

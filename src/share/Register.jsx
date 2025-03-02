import Lottie from "lottie-react";
import React from "react";
import register from "../assets/Signin.json";
import GoogleSignIn from "./GoogleSignIn";

const Register = () => {
  const handleform=(e)=>{
   e.preventDefault()
   const form=e.target 
   const name=form.name.value 
   const email=form.email.value 
   const photo=form.photo.value 
   const password=form.password.value 
   const user={name ,email ,photo ,password}
   console.log(user)
  }
  return (
    <div className="hero bg-gray-200 dark:bg-black min-h-screen">
      <div className="flex justify-center gap-4 gap-x-8 items-center w-[80%] flex-col lg:flex-row-reverse">
        <div className="bg-white rounded-2xl lg:w-[50%] flex-1 ">
          <Lottie className="" animationData={register} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl flex-1 px-6 py-8 ">
          <h1 className="text-5xl text-center font-bold">Register now!</h1>
          <form onSubmit={handleform} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name="photo"
                type="url"
                placeholder="Your Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </div>
  );
};

export default Register;

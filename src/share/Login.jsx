import login from "../assets/Login.json";
import Lottie from "lottie-react";

// Login page

function Login() {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;
    const user = { email, password };
    console.log(user);
  };
  return (
    <div className="hero bg-gray-200 dark:bg-black min-h-screen">
      <div className="flex justify-center gap-4 items-center w-[80%] flex-col lg:flex-row-reverse">
        <div className=" lg:w-[55%] md:flex-1">
          <Lottie className="" animationData={login} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 md:flex-1 lg:w-[35%] shrink-0 shadow-2xl flex-1 lg:p-10 p-4 ">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
          <form onSubmit={handleForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

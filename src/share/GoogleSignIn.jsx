import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const GoogleSignIn = () => {
  return (
    <div>
      <div>
        <div className="divider">OR</div>
      </div>
      <div className="flex gap-8 flex-col md:flex-row justify-center items-center">
        <div className="flex gap-2 justify-center items-center">
        <span className="text-xl"><FcGoogle /></span>
        <button className="text-xl font-medium dark:text-white ">Google Login</button>
        </div>
        <div className="flex gap-2 justify-center items-center">
        <span className="text-xl"><FaGithub /></span>
        <button className="text-xl font-medium dark:text-white ">Google Login</button>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;

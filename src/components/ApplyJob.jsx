import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import fileSend from "../assets/filesend.json"; 
import { AuthContext } from "../authentication/Authentication";

const ApplyJob = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5000/jobs-apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="card bg-base-100 w-full shadow-2xl py-20 rounded-none">
      <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center">
        Apply Job and Good Luck!
      </h1>
      <div className="flex justify-center items-center flex-col md:flex-row-reverse gap-4">
        {/* Fixed Lottie Section */}
        <div className="md:w-[50%] mx-auto px-8 md:px-0">
          <Lottie animationData={fileSend} loop={true} className="w-full h-auto" />
        </div>

        <div className="w-full md:px-10 px-4">
          <form onSubmit={submitJobApplication} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn URL</span>
              </label>
              <input
                type="url"
                name="linkedIn"
                placeholder="LinkedIn URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Github URL</span>
              </label>
              <input
                type="url"
                name="github"
                placeholder="Github URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume URL</span>
              </label>
              <input
                type="url"
                name="resume"
                placeholder="Resume URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;

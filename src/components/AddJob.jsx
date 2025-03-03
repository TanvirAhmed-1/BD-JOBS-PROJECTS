import React, { useContext } from "react";
import { AuthContext } from "../authentication/Authentication";

const AddJob = () => {
  const { user } = useContext(AuthContext);

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;

    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Job added successfully!");
        }
      });
  };

  return (
    <div className="bg-green-500 min-h-screen py-20">
      <div className="max-w-7xl mx-auto p-8 py-14  border-2 border-solid border-gray-300 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Post a New Job</h2>
        <form
          onSubmit={handleAddJob}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Job Title */}
          <div className="form-control">
            <label className="label font-semibold text-black">Job Title</label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input bg-white border-green-500 input-bordered w-full"
              required
            />
          </div>

          {/* Job Location */}
          <div className="form-control">
            <label className="label font-semibold text-black">
              Job Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              className="input bg-white border-green-500 input-bordered w-full"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label className="label font-semibold text-black">Job Type</label>
            <select
              name="jobType"
              className="select bg-white border-green-500 select-bordered w-full"
            >
              <option disabled>Pick a Job Type</option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>

          {/* Job Field */}
          <div className="form-control">
            <label className="label font-semibold text-black">Job Field</label>
            <select
              name="jobField"
              className="select bg-white border-green-500 select-bordered w-full"
            >
              <option disabled>Pick a Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="form-control">
            <label className="label font-semibold text-black">
              Minimum Salary
            </label>
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input bg-white border-green-500 input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold text-black">
              Maximum Salary
            </label>
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input bg-white border-green-500 input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold text-black">Currency</label>
            <select
              name="currency"
              className="select bg-white border-green-500 select-bordered w-full"
            >
              <option disabled>Pick Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>

          {/* Application Deadline */}
          <div className="form-control">
            <label className="label font-semibold text-black">
              Application Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="input bg-white border-green-500 input-bordered w-full"
              required
            />
          </div>

          {/* Job Description */}
          <div className="form-control col-span-2">
            <label className="label font-semibold text-black">
              Job Description
            </label>
            <textarea
              name="description"
              placeholder="Job Description"
              className="textarea bg-white border-green-500 textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Company Name */}
          <div className="form-control">
            <label className="label font-semibold text-black">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input bg-white border-green-500 input-bordered w-full"
              required
            />
          </div>

          {/* Company Logo */}
          <div className="form-control">
            <label className="label font-semibold text-black">
              Company Logo URL
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Company Logo URL"
              className="input bg-white border-green-500 input-bordered w-full"
              required
            />
          </div>

          {/* Job Requirements */}
          <div className="form-control col-span-2">
            <label className="label font-semibold text-black">
              Job Requirements
            </label>
            <textarea
              name="requirements"
              placeholder="Each requirement on a new line"
              className="textarea bg-white border-green-500 textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Job Responsibilities */}
          <div className="form-control col-span-2">
            <label className="label font-semibold text-black">
              Job Responsibilities
            </label>
            <textarea
              name="responsibilities"
              placeholder="Each responsibility on a new line"
              className="textarea bg-white border-green-500 textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* HR Name */}
          <div className="form-control">
            <label className="label font-semibold text-black">HR Name</label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input bg-white border-green-500 input-bordered w-full"
              required
            />
          </div>

          {/* HR Email */}
          <div className="form-control">
            <label className="label font-semibold text-black">HR Email</label>
            <input
              type="text"
              name="hr_email"
              placeholder="HR Email"
              className="input bg-white border-green-500 input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control col-span-2 mt-6">
            <button className="btn btn-primary w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;

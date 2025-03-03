import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobData = useLoaderData();
  console.log(jobData);

  return (
    <div className="bg-green-500 pb-20 px-2">
      <div className="py-16">
      <h1 className="text-4xl font-medium text-black text-center"> Show Job Details and Apply The Job</h1>
      </div>
      <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white shadow-lg rounded-lg   my-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-6 mb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-16 h-16 flex-shrink-0">
              <img
                src={jobData.company_logo || "/placeholder.svg"}
                alt={`${jobData.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {jobData.title}
              </h1>
              <p className="text-lg text-gray-700">{jobData.company}</p>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                jobData.status === "active"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {jobData.status === "active" ? "Active" : "Closed"}
            </span>
            <p className="text-gray-600 mt-2">Category: {jobData.category}</p>
          </div>
        </div>

        {/* Job Overview */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mb-8 ">
          <div className="bg-gray-50 group hover:bg-green-400 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 group-hover:text-black text-gray-800">
              Job Overview
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium w-32 group-hover:text-black text-gray-700">
                  Location:
                </span>
                <span className="text-gray-600 group-hover:text-white">{jobData.location}</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-32 group-hover:text-black text-gray-700">
                  Job Type:
                </span>
                <span className="text-gray-600 group-hover:text-white">{jobData.jobType}</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-32 group-hover:text-black text-gray-700">
                  Salary Range:
                </span>
                <span className="text-gray-600 group-hover:text-white">
                  {jobData.salaryRange.min.toLocaleString()} -{" "}
                  {jobData.salaryRange.max.toLocaleString()}{" "}
                  {jobData.salaryRange.currency.toUpperCase()}
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-32 group-hover:text-black text-gray-700">
                  Deadline:
                </span>
                <span className="text-gray-600 group-hover:text-white">
                  {new Date(jobData.applicationDeadline).toLocaleDateString()}
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg hover:bg-green-400 group">
            <h2 className="text-xl font-semibold group-hover:text-black mb-3 text-gray-800">
              Contact Information
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium w-32 group-hover:text-black text-gray-700">HR Name:</span>
                <span className="text-gray-600 group-hover:text-white">{jobData.hr_name}</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-32 group-hover:text-black text-gray-700">Email:</span>
                <span className="text-gray-600 group-hover:text-white">{jobData.hr_email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Job Description
          </h2>
          <p className="text-gray-700 leading-relaxed">{jobData.description}</p>
        </div>

        {/* Responsibilities */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Responsibilities
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            {jobData.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-gray-700">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Requirements
          </h2>
          <div className="flex flex-wrap gap-2">
            {jobData.requirements.map((requirement, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {requirement}
              </span>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-8 flex justify-end">
          <Link to={`/apply/${jobData._id}`} className="bg-primary hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

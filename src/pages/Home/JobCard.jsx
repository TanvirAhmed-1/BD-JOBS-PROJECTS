import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoBagSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const JobCard = ({ jobs }) => {
  console.log(jobs);

  const {
    jobType,
    company_logo,
    company,

    requirements,
    location,
    _id,
    title,
    status,
  } = jobs;

  return (
    <div className="group card bg-white rounded-lg border-2 border-solid hover:bg-green-500 p-4">
      <div className="flex justify-between items-center p-2">
        <figure>
          <img src={company_logo} alt="Shoes" />
        </figure>
        <button className="btn text-green-500 bg-green-100 hover:bg-white border-none text-xl font-normal">
          {status}
        </button>
      </div>
      <div className="flex justify-start pt-4 items-center gap-4">
        <p className="text-gray-500  text-lg font-medium flex group-hover:text-white justify-center items-center gap-2">
          <span className="text-gray-300 text-lg group-hover:text-white">
            <FaLocationDot />
          </span>{" "}
          {location}
        </p>
        <p className="text-gray-500 text-lg font-medium flex  group-hover:text-white justify-center items-center gap-2">
          <span className="text-gray-300 text-lg group-hover:text-white">
            <IoBagSharp />
          </span>{" "}
          {jobType}
        </p>
      </div>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl pb-4 text-black group-hover:text-white">
          {title}
        </h2>
        <div className="flex flex-wrap gap-4">
         {
          requirements?.map((v ,index)=><button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600 hover:bg-transparent text-sm hover:text-white  " key={index}>{v}</button>)
         }
        </div>
        <Link to={`/jobDetails/${_id}`} className="card-actions justify-end pt-2">
          <button className="btn bg-gray-300 text-black border-none group-hover:bg-white group-hover:text-green-600">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;

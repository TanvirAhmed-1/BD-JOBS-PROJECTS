import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="md:w-9/12 mx-auto md:py-20 pb-4 p-2">
        <h1 className="lg:text-6xl md:text-4xl text-2xl text-black font-semibold">
          Explore <span>{data.length}</span>+ Job Post in Jobpath
        </h1>
        <p className="md:text-xl text-lg font-medium pt-4">
          From entry-level positions to executive roles browse through.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 lg:gap-6  lg:w-9/12 mx-auto p-2 pb-20">
        {data.map((jobs) => (
          <JobCard key={jobs._id} jobs={jobs}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

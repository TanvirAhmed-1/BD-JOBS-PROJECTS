import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../authentication/Authentication";
import axios from "axios";
import axiosSecuer from "../hook/axiosSecuer";

const MyApply = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const axiosHoook=axiosSecuer()
  useEffect(() => {

    // fetch(`http://localhost:5000/jobs-apply?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    // axios(`http://localhost:5000/jobs-apply?email=${user.email}`,{withCredentials: true })
    // .then(res=>setData(res))
    axiosHoook.get(`/jobs-apply?email=${user.email}`)
    .then(res=>setData(res.data))
  }
  , [user.email]);

  return (
    <div className="bg-base-100 pb-20">
      <div>
        <h1 className="text-3xl text-cyan-100 font-semibold text-center py-14 ">Your Apply Job </h1>
      </div>
      {/* table section */}
      <div className="px-4">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Number</th>
                <th>logo</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data.map((value, index) => (
                <tr>
                  <th>{index+1}</th>
                  <th> <img className="object-cover w-14" src={value.company_logo} alt="" srcset="" /> </th>
                  <td>{value.title}</td>
                  <td>{value.company}</td>
                  <td>{value.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApply;

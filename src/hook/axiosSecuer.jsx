import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../authentication/Authentication";
import { useNavigate } from "react-router-dom";

const axiosAPI = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const axiosSecuer = () => {
  const { userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {

   axiosAPI.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("interceptors ", error.status);

        if ( error.status === 401) {
          console.log("logout user");
          userSignOut()
            .then((data) => {
              console.log(data.user);
              navigate("/login");
            })
            .then((err) => {
              console.log(err.message);
            });
        }

        return Promise.reject(error);
      }
    );
  }, []);
  return axiosAPI;
};

export default axiosSecuer;

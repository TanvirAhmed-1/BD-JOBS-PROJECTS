import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { app } from "./../firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const Authentication = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const auth = getAuth(app);

  //google login
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //github login

  const gitHubProvider = new GithubAuthProvider();
  const gitHubSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  //user create
  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //user delete
  const userSignOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  //user photo and url update

  //user sign in
  const userSignIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    loader,
    gitHubSignIn,
    googleSignIn,
    registerUser,
    userSignIn,
    userSignOut,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser", currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post(`http://localhost:5000/jwt`, user, { withCredentials: true })
          .then((res) => {console.log(res.data)
            setLoader(false);
          });
      }
      else{
        axios.post(`http://localhost:5000/logout`,{},{withCredentials:true})
        .then(res=>{console.log(res.data)
          setLoader(false);
        })
      }
      
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default Authentication;

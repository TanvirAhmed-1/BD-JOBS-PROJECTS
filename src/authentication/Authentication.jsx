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

export const AuthContext = createContext(null);

const Authentication = ({children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState();

  const auth = getAuth(app);

  //google login
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //github login

  const gitHubProvider = new GithubAuthProvider();
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  //user create
const registerUser=(email, password)=>{
 return createUserWithEmailAndPassword(auth, email, password)
}
  //user delete
   const userSignOut=()=>{
    return signOut(auth)
   }
  //user photo and url update

  //user sign in
  const userSignIn=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

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

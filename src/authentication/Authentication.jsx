import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
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

  //user delete

  //user photo and url update

  const authInfo = {
    user,
    setUser,
    loader,
    gitHubSignIn,
    googleSignIn,
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

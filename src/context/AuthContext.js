import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebaseInit";

const AuthContext = createContext({
  currentUser:null,
  register: () => Promise,
  login: () => Promise,
  signupWithGoogle: () => Promise,
  forgetPassword: () => Promise,
  resetPassword: () => Promise,
  logout: () => Promise,
});

export const useAuth = () => useContext(AuthContext);
const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user){
        // setCurrentUser(user)
        localStorage.setItem('currentUser',JSON.stringify(user)) 
      }
      else{
        localStorage.setItem('currentUser',null)
      }
      
    })
    return () => {
      unsubscribe()
    }
  }, [])
  
  useEffect(() => {
    console.log('The user is', currentUser)
    
    // currentUser ? localStorage.setItem('currentUser',JSON.stringify(currentUser)) : localStorage.setItem('currentUser',null)


    // if(currentUser){
    //   localStorage.setItem('currentUser',JSON.stringify(currentUser))
    // }else{
    //   localStorage.setItem('currentUser',null)
    // }


  }, [currentUser])


  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signupWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const forgetPassword = (email) => {
    console.log("running", email);
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    });
  };

  const resetPassword = (obbCode, newPassword) => {
    return confirmPasswordReset(auth, obbCode, newPassword);
  };

  const logout = () => {
    signOut(auth);
  };

  const value = {
    currentUser,
    register,
    login,
    signupWithGoogle,
    forgetPassword,
    resetPassword,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

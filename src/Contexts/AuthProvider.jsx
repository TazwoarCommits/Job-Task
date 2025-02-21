import PropTypes from "prop-types";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from './../Firebase/firebase.config';
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
             setUser(currentUser) ;
             setLoading(false) ;
          }
      )
        
         return () => {
          unsubscribe() ;
         } 
  
      },[]) ; 


      const logOut = () => {
        setLoading(true) ;
        return signOut(auth) ;
    } ;


    const authInfo = {
        googleLogin,
        user, 
        setUser,
        loading,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node
}

export default AuthProvider;
import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';

import firebase from './firebase';

const authContext = createContext();

export function AuthProvider({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user);

    const signinWithGitHub = (redirect) => {
        setLoading(true);
        return firebase
          .auth()
          .signInWithPopup(new firebase.auth.GithubAuthProvider())
          .then((response) => {
            setUser(response.user);
            return response.user;
            // if (redirect) {
            //   Router.push(redirect);
            // }
          });
      };

    const signout = () => {
        Router.push('/');
    
        return firebase
          .auth()
          .signOut()
          .then(() => setUser(false));
      };

    return {
        user,
        loading,
        signinWithGitHub,
        signout
      };
}


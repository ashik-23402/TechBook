import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import "../FireBase"
import {getAuth,createUserWithEmailAndPassword,updateProfile,
signInWithEmailAndPassword,signOut,
onAuthStateChanged} from "firebase/auth"


const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export  function AuthProvider({children}){

    const [loading,SetLoading] = useState(false);
    const [currentUser, SetCurrentuser] = useState();

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            SetCurrentuser(user);
            SetLoading(false);
        })

        return unsubscribe;
    },[]);


    async function signup(email,password,username){

        const auth = getAuth();

        await createUserWithEmailAndPassword(auth,email,password);

        //updateprofile

        await updateProfile(auth.currentUser,{
            displayName:username
        });

        const user = auth.currentUser;
        SetCurrentuser({
            ...user,
        });



    }


     function login(email,password){
        const auth = getAuth();

        return signInWithEmailAndPassword(auth,email,password);
    }


    function logout(){
        const auth = getAuth();
        return signOut(auth);
    }


    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
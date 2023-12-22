import React from 'react'
import { app } from "../utils/firebaseAuth";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/useReducer';
const AuthButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleAuth = async () => {
 
      try {
          const provider = new GoogleAuthProvider();
          const auth = getAuth(app);
          const result = await signInWithPopup(auth, provider);
          const res = await fetch("http://localhost:3001/api/auth/google", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              nom: result.user.displayName,
              email: result.user.email,
            }),
            credentials: "include",
          });
        const data = await res.json();
        dispatch(signInSuccess(data));
        console.log(data);

        navigate("/");
      } catch (error) {
            console.log("Could not sign in with google", error);

      }
  

    }
    return (
      <button
        on
        onClick={handleGoogleAuth}
        className="bg-graynav  text-white rounded-lg py-2 -mt-3"
      >
        Login with google
      </button>
    );
}

export default AuthButton

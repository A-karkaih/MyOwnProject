import React from 'react'
import { app } from "../utils/firebaseAuth";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const AuthButton = () => {
  const navigate = useNavigate();
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
          });
        const data = await res.json();
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

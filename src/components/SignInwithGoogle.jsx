import React from 'react';
import googleIcon from '../google.png'; // Import the image
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
function SignInwithGoogle() {
        function googleLogin() {
          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider).then(async (result) => {
            console.log(result);
            if(result.user)
            {
                window.location.href="/mainpage";
            }
          });
        }
        return (
        <div>
            <p className="continue-p" style={{ display: "flex", justifyContent: "center"}}>--Or continue with--</p>
            <div         style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
            onClick={googleLogin}
            >
                <img src={googleIcon} width={"60%"} alt="Sign in with Google" />
            </div>
        </div>
    );
}

export default SignInwithGoogle;

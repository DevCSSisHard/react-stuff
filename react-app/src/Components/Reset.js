import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";


function Reset(){
  const [email,setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if(loading) return;
    if (user) navigate("/Home");
  }, [user,loading]);

  return (
    <div className="reset max-h-screen flex justify-center p-8">
      <div className="reset__container flex flex-col bg-blue-200 p-8">
        <input
          type="text"
          className="reset__textBox p-4 font-thin mb-0"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />

        <button
          className="reset__btn"
          onClick={sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div>
          Already have an account? <Link to="/Login">Login</Link> now.
        </div>
      </div>

    </div>
  );
}
export default Reset;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter a name.");
    registerWithEmailAndPassword(name,email,password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user,loading]);
   return (
    <div className="register max-h-screen flex justify-center p-8">
      <div className="register__container flex flex-col bg-blue-200 p-8">
        <input
          type="text"
          className="register__textBox p-4 font-thin mb-0"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          />
        <input
          type="text"
          className="register__textBox p-4 font-thin mb-0"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox p-4 font-thin mb-0"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
        Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/Login">Login</Link> now.
        </div>
      </div>

    </div>
);

}
export default Register;

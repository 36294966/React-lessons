
import React, { useState, useContext } from "react";
import { loginContext } from "../Contexts/loginContext";

function Login() {
  const { setUsername, setShowProfile } = useContext(loginContext);

  return (
    <>
      <input
        type="text"
        placeholder="username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type="text" placeholder="password..." />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
    </>
  );
}

export default Login;
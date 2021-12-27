import React from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
export const LoginPage = () => {
  const loginWithGoogle = async () => {
    try {
      await axios.get("/login/google").then((response) => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginBody">
      <div className="login-container">
        <button className="googleBtn" onClick={loginWithGoogle}>
          <FcGoogle size="1.4rem" /> Login with GOOGLE
        </button>
      </div>
    </div>
  );
};

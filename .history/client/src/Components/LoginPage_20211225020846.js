import React from "react";
import { FcGoogle } from "react-icons/fc";
export const LoginPage = () => {
  const LoginWithGoogle = () => {
    console.log("object");
  };
  return (
    <div className="loginBody">
      <div className="login-container">
        <button className="googleBtn" onClick={LoginWithGoogle}>
          <FcGoogle size="1.4rem" /> Login with GOOGLE
        </button>
      </div>
    </div>
  );
};

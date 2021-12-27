import React from "react";
import { FcGoogle } from "react-icons/fc";
export const LoginPage = () => {
  return (
    <div className="loginBody">
      <div className="login-container">
        <button className="googleBtn">
          <FcGoogle size="1.4rem" /> Login with GOOGLE
        </button>
      </div>
    </div>
  );
};

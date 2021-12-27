import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
// import axios from "axios";
export const LoginPage = () => {
  const loginWithGoogle = async () => {
    window.open("/auth/google", "_self");
  };
  const loginWithGitHub = () => {
    // window.open("");
  };
  return (
    <div className="loginBody">
      <div className="login-container">
        <button className="googleBtn" onClick={loginWithGoogle}>
          <FcGoogle size="1.4rem" /> Login with GOOGLE
        </button>
        <button className="GithubBtn" onClick={loginWithGitHub}>
          <AiFillGithub size="1.4rem" /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
// import axios from "axios";
export const LoginPage = () => {
  const loginWithGoogle = async () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const loginWithGitHub = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  const loginWithTwitter = () => {};
  return (
    <div className="loginBody">
      <div className="login-container">
        <button className="googleBtn" onClick={loginWithGoogle}>
          <FcGoogle size="1.4rem" /> Login with GOOGLE
        </button>
        <button className="GithubBtn" onClick={loginWithGitHub}>
          <AiFillGithub size="1.4rem" /> Login with GitHub
        </button>
        <button className="TwitterBtn" onClick={loginWithTwitter}>
          <AiOutlineTwitter size="1.4rem" fill="blue" /> Login with Twitter
        </button>
      </div>
    </div>
  );
};

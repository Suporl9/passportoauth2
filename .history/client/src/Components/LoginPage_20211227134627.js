import React from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
export const LoginPage = () => {
  const loginWithGoogle = async () => {
    const toBeSentData = { a: "a", b: "b" };
    try {
      const respinse = await axios
        .post("/test", toBeSentData, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((response) => response.data);
      console.log(respinse);
    } catch (error) {
      console.log(error);
    }
  };

  document.querySelector(".hello").innerHTML = "fes";
  return (
    <div className="loginBody">
      <div className="login-container">
        <button className="googleBtn" onClick={loginWithGoogle}>
          <FcGoogle size="1.4rem" /> Login with GOOGLE
        </button>
        <h3 className="hello"></h3>
      </div>
    </div>
  );
};

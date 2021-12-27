import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
export const LoginPage = () => {
  const [rec, toRec] = useState("");

  const loginWithGoogle = async () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const getUser = async () => {
    const toputrec = await axios
      .get("/test")
      .then((resp) => resp.data.photos[0].value);
    toRec(toputrec);
  };
  return (
    <div className="loginBody">
      <div className="login-container">
        <button className="googleBtn" onClick={getUser}>
          Get user
        </button>
        <button className="googleBtn" onClick={loginWithGoogle}>
          <FcGoogle size="1.4rem" /> Login with GOOGLE
        </button>
        {/* <img src={rec} alt="memp" /> */}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
export const LoginPage = () => {
  const [rec, toRec] = useState("");
  // console.log(rec);
  // const loginWithGoogle = async () => {
  //   // const toBeSentData = { a: "abc", b: "b" };
  //   try {
  //     const respinse = await axios
  //       .get(
  //         "http://localhost:5000/auth/google"
  //         //  {
  //         //   headers: {
  //         //     "Content-type": "application/json",
  //         //   },
  //         // }
  //       )
  //       .then((response) => response.data);
  //     // toRec(respinse);
  //     console.log(respinse);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const loginWithGoogle = async () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const getUser = async () => {
    const toputrec = await axios.get("/test").then((resp) => resp.data);
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
        <img src={rec} alt="memp" />
      </div>
    </div>
  );
};

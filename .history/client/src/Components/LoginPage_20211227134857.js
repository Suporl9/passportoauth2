import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
export const LoginPage = () => {
  const [rec, toRec] = useState("");
  console.log(rec);
  const loginWithGoogle = async () => {
    const toBeSentData = { a: "abc", b: "b" };
    try {
      const respinse = await axios
        .post("/test", toBeSentData, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((response) => response.data);
      toRec(respinse);
      console.log(respinse);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(rec);

  document.querySelector(".hello").innerHTML = rec.a;
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

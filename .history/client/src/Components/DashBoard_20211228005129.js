import React, { useContext } from "react";
import { myContext } from "./Context/GlobalContext";

export const DashBoard = () => {
  const userObj = useContext(myContext);
  console.log("dashboarduserobj", userObj);
  return (
    <div>
      <h3>Hey welcome you have been logged in</h3>
      <img src={userObj.photo} alt="useravatar" />
    </div>
  );
};

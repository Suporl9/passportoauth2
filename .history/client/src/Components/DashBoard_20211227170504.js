import React, { useContext } from "react";
import { myContext } from "./Context/GlobalContext";

export const DashBoard = () => {
  const userObj = useContext(myContext);
  return (
    <div>
      <h3>Hey welcome you have been logged in</h3>
    </div>
  );
};

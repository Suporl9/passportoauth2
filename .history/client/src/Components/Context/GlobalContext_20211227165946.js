import axios from "axios";
import React, { useEffect, useState } from "react";
const myContext = React.createContext();
function GlobalContext({ children }) {
  const [user, setUser] = useState("");

  const getUser = async () => {
    const userObj = axios
      .get("/test")
      .then((resp) => console.log(resp.dataobject));
    // console.log(userObj);
  };
  useEffect(() => {
    getUser();
  });

  return <myContext.Provider value={"fe"}>{children}</myContext.Provider>;
}

export default GlobalContext;

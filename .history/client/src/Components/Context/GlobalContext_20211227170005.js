import axios from "axios";
import React, { useEffect, useState } from "react";
const myContext = React.createContext();
function GlobalContext({ children }) {
  const [user, setUser] = useState("");

  const getUser = async () => {
    const userObj = axios.get("/test").then((resp) => resp.data);
    // console.log(userObj);
    setUser(userObj);
  };
  useEffect(() => {
    getUser();
  });

  return <myContext.Provider value={"fe"}>{children}</myContext.Provider>;
}

export default GlobalContext;

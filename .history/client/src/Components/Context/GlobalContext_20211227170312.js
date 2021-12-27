import axios from "axios";
import React, { useEffect, useState } from "react";
const myContext = React.createContext();
function GlobalContext({ children }) {
  const [user, setUser] = useState("");

  const getUser = async () => {
    const userObj = await axios.get("/test").then((resp) => resp.data);
    setUser(userObj);
  };

  useEffect(() => {
    getUser();
    // console.log(user);
  }, []);

  return <myContext.Provider value={user}>{children}</myContext.Provider>;
}

export default GlobalContext;

import axios from "axios";
import React, { useEffect } from "react";
const myContext = React.createContext();
function GlobalContext({ children }) {
  useEffect(() => {
    axios.get("/test").then((resp) => resp.data);
  });

  return <myContext.Provider value={"fe"}>{children}</myContext.Provider>;
}

export default GlobalContext;

import React from "react";
const myContext = React.createContext();
function GlobalContext({ children }) {
  return <myContext.Provider value={"fe"}>{children}</myContext.Provider>;
}

export default GlobalContext;

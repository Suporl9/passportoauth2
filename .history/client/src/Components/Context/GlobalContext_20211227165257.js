import React from "react";

export const myContext = React.createContext();

export const GlobalContext = ({ Children }) => {
  return <myContext.Provider value={"fe"}>{Children}</myContext.Provider>;
};

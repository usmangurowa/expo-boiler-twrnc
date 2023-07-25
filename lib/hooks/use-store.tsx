import React from "react";
import GlobalContext from "../context";

const useStore: ContextHook = () => {
  const { state, dispatch } = React.useContext(GlobalContext);
  return { dispatch, state };
};

export default useStore;

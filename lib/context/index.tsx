import React, { ReactNode } from "react";
import reducer from "./reducer";

const initialState: InitialStateType = {
  loading: false,
  app_ready: false,
  error: null,
  app_loaded: false,
  is_logged_in: false,
};

const GlobalContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(() => ({ state, dispatch }), [state]);
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { Provider };

export default GlobalContext;

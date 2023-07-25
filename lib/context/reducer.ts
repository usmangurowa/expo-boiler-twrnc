export enum Actions {
  INITIALIZE = "INITIALIZE",
  AUTHENTICATE = "AUTHENTICATE",
  FONTSLOADED = "FONTSLOADED",
  LOGOUT = "LOGOUT",
  APPREADY = "APPREADY",
}

const reducer: ReducerType = (
  state: InitialStateType,
  action
): InitialStateType => {
  switch (action.type) {
    case Actions.INITIALIZE:
      return state;
    default:
      return state;
  }
};

export default reducer;

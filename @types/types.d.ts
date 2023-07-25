type InitialStateType = {
  loading: boolean;
  app_ready: boolean;
  error: string | null;
  app_loaded: boolean;
  is_logged_in: boolean;
};

type Action = {
  type: ActionTypes;
  payload?: any;
};

type ReducerType = (state: InitialStateType, action: Action) => State;

type ContextHook = () => {
  state: InitialStateType;
  dispatch: (action: Action) => void;
};

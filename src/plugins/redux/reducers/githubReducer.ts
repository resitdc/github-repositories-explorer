import { InitialStateTypes } from "interfaces/github";

const initialState: InitialStateTypes = {
  users: [],
  repos: {},
};

const githubReducer = (state: InitialStateTypes = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
  case "SET_USERS":
    return {
      ...state,
      users: payload,
    };

  case "SET_REPOS":
    const newRepos = {
      ...state.repos,
      [payload.key]: payload.value,
    };
    return {
      ...state,
      repos: newRepos,
    };
    
  case "CLEAR_REPOS":
    return {
      ...state,
      repos: {},
    };

  case "CLEAR_USERS":
    return {
      ...state,
      users: [],
    };

  case "CLEAR_ALL":
    return initialState;

  default:
    return state;
  }
};

export default githubReducer;

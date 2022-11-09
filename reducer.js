import * as ActionType from "./action-type.js";

const InitializeState = {
  message: "app store",
  count: 0,
  request: false
};

// Reducer must be pure function
export function reducer(state = InitializeState, action) {
  // do somthing
  switch (action.type) {
    case ActionType.INCREASE:
      if (action.payload) {
        return { ...state, count: state.count + action.payload };
      } else {
        return {
          ...state,
          count: state.count === undefined ? 1 : state.count + 1,
        };
      } 
    case ActionType.DECREASE:
      return {
        ...state,
        count: state.count === undefined ? 0 : state.count - 1,
      }; 
    case ActionType.SET_COUTNER:
      return { ...state, count: action.payload };
    case ActionType.ASYNC_REQUEST:
      return { ...state, request: true };
    case ActionType.ASYNC_RESPONSE:
      return { ...state, request: false};
    default:
      return { ...state };
  }
}

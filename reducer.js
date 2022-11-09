import * as ActionType from "./action-type.js";

const InitializeState = {
  message: "app store",
  count: 0,
};

// Reducer should be pure function

export function reducer(state = InitializeState, action) {
  // do somthing
  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count === undefined ? 1 : state.count + 1 };
    case ActionType.ASYNC_INCREASE:
         
    // fetch(action.payload.url)
      //   .then(response => response.json())
      //   .then(result => {
      //   return {...state}
      //   })
      //   .catch(err => {
      //   return {...state}
      // })
    case ActionType.DECREASE:
      return { ...state, count: state.count === undefined ? 0: state.count - 1 };
    case ActionType.RESET:
      return { ...state, count: 0 };
    case ActionType.SET_COUTNER:
      return { ...state, count: action.payload };
    default:
      return { ...state };
  }
}

import { createStore  } from "./redux.js";
import { reducer } from "./reducer.js"; 
import * as Actions from "./actions.js"
// Flux architecture

const store = createStore(reducer);

store.subscribe(function () {
  // 리액트를 리렌더링 하면 될듯?
  console.log(store.getState());
});

store.dispatch(Actions.increase());
store.dispatch(Actions.increase());
store.dispatch(Actions.increase());
store.dispatch(Actions.decrease());
store.dispatch(Actions.increase());
store.dispatch(Actions.reset());

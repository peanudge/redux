import { createStore } from "./redux.js";
import { reducer } from "./reducer.js";
import * as Actions from "./actions.js";
import { ASYNC_INCREASE, SET_COUTNER } from "./action-type.js";
// Flux architecture

const middleware1 = store => next => action => {
  // do something
  console.log("m1", action)
   
  next(action);
}
const middleware2 = store => next => action => {
  // do something
  console.log("m2", action)
  if (action.type === SET_COUTNER) {
    action.payload = 100;
  } 
  next(action);
}
const middleware3 = store => next => action => {
  // do something
  console.log("m3", action)
  if (action.type === ASYNC_INCREASE) {
    setTimeout(() => {
      next(Actions.increase());
    }, 1000);
  } else {
    next(action);
  } 
}

const store = createStore(reducer, [middleware1, middleware2, middleware3]);

const counterDisplay = document.querySelector("#counter");
const btnIncrease = document.querySelector("#btn-increase");
const btnAsyncIncrease = document.querySelector("#btn-async-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const btnReset = document.querySelector("#btn-reset");


store.subscribe(() => {
  const { count } = store.getState(); 
  counterDisplay.textContent = count;
});

store.dispatch(Actions.setCounter(0));

btnReset.addEventListener("click", () => {
  store.dispatch(Actions.setCounter(0));
})

btnIncrease.addEventListener("click", () => {
  store.dispatch(Actions.increase())
})

btnAsyncIncrease.addEventListener("click", () => {
  store.dispatch(Actions.asyncIncrease({ url: "/async-increase" }));
});

btnDecrease.addEventListener("click", () => {
  store.dispatch(Actions.decrease());
}) 
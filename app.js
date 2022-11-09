import { createStore } from "./redux.js";
import { reducer } from "./reducer.js";
import * as Actions from "./actions.js";
import { logger } from "./logger.js";
import { ASYNC_INCREASE } from "./action-type.js";

const asyncRouter = (jobs) => (store) => (next) => (action) => {
  const matchJob = Object.entries(jobs).find(([type]) => action.type === type);
  if (matchJob) {
    matchJob[1](store, action);
  } else {
    next(action);
  }
};

const asyncJobs = {
  [ASYNC_INCREASE]: function (store, action) {
    store.dispatch(Actions.asyncRequest());
    setTimeout(() => {
      store.dispatch(Actions.increase(20));
      store.dispatch(Actions.asyncResponse());
    }, 1000);
  },
};

const store = createStore(reducer, [logger, asyncRouter(asyncJobs)]);

const counterDisplay = document.querySelector("#counter");
const btnIncrease = document.querySelector("#btn-increase");
const btnAsyncIncrease = document.querySelector("#btn-async-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const btnReset = document.querySelector("#btn-reset");
const loadingDisplay = document.querySelector("#loading");

store.subscribe(() => {
  const { count, request } = store.getState();
  
  loadingDisplay.style.visibility = request ? "visible" : "hidden";
  
  counterDisplay.textContent = count;
});

store.dispatch(Actions.setCounter(0));

btnReset.addEventListener("click", () => {
  store.dispatch(Actions.setCounter(0));
});

btnIncrease.addEventListener("click", () => {
  store.dispatch(Actions.increase());
});

btnAsyncIncrease.addEventListener("click", () => {
  store.dispatch(Actions.asyncIncrease({ url: "/async-increase" }));
});

btnDecrease.addEventListener("click", () => {
  store.dispatch(Actions.decrease());
});

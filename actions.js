import { DECREASE, INCREASE, ASYNC_INCREASE,  SET_COUTNER, ASYNC_REQUEST, ASYNC_RESPONSE } from "./action-type.js";
import { acitonCreator } from "./redux.js";

export const increase = acitonCreator(INCREASE);
export const decrease = acitonCreator(DECREASE);
export const setCounter = acitonCreator(SET_COUTNER);
export const asyncIncrease = acitonCreator(ASYNC_INCREASE);
export const asyncRequest = acitonCreator(ASYNC_REQUEST);
export const asyncResponse = acitonCreator(ASYNC_RESPONSE);
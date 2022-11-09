import { DECREASE, INCREASE, ASYNC_INCREASE, RESET, SET_COUTNER } from "./action-type.js";
import { acitonCreator } from "./redux.js";

export const increase = acitonCreator(INCREASE);
export const decrease = acitonCreator(DECREASE);
export const reset = acitonCreator(RESET);
export const setCounter = acitonCreator(SET_COUTNER);
export const asyncIncrease = acitonCreator(ASYNC_INCREASE);
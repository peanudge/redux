import { DECREASE, INCREASE } from "./action-type.js";
import { acitonCreator } from "./redux.js";

export const increase = acitonCreator(INCREASE);
export const decrease = acitonCreator(DECREASE);
export const reset = acitonCreator(RESET);

export const logger = store => next => action => {
    const currentState = store.getState();
    
    console.groupCollapsed("action logger => ", action.type);
    console.log("Current state: ", currentState);
    console.log("Action type: ", action.type);
    console.log("Action Payload: ", action.payload);
    console.groupEnd();

    next(action);
}
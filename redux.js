// 호출 지연 기법. curry 함수
export const acitonCreator = type => payload => ({
  type,
  payload
}
)
export function createStore(reducer, middlewares = []) {
  let state;
  let handlers = [];

  // 변경
  function dispatch(action) {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  // 데이터 확인
  function getState() {
    return state;
  }

  // redux의 middleware가 되려면 
  // store, dispatch, action을 인자로 받아야한다.
  // 그래서 store, dispatch는 미리 받자

  const store = {
    dispatch,
    getState,
    subscribe,
  }
  
  middlewares = Array.from(middlewares).reverse();
  
  let lastDispatch = dispatch;

  middlewares.forEach((middleware) => {
    lastDispatch = middleware(store)(lastDispatch);
  }) 

  store.dispatch = lastDispatch;

  return store;
}
 
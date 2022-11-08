// 호출 지연 기법. curry 함수
export const acitonCreator = type => payload => ({
  type,
  payload
}
)
export function createStore(reducer) {
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

  return {
    dispatch,
    getState,
    subscribe,
  };
}
 
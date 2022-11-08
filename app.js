function createStore() {
  let state;
  let handlers = [];

  // 변경
  function send(action) {
    state = worker(state, action);
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
    send,
    getState,
    subscribe,
  };
}

function worker(state = { count: 0 }, action) {
  // do somthing
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };

    default:
      return { ...state };
  }
}

// Flux architecture

const store = createStore(worker);

store.subscribe(function () {
    // 리액트를 리렌더링 하면 될듯?
    // Provider
  console.log(store.getState());
});

store.send({ type: "increase" });
store.send({ type: "increase" });

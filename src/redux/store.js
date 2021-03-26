function createStore(reducer, initState) {
  let currentState = initState;
  let listeners = [];
  function dispatch(action) {
    currentState = reducer(currentState, action);
    for (let l of listeners) {
      l();
    }
  }
  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }
  function getState() {
    return currentState;
  }
  dispatch(`@init`);

  return {
    dispatch,
    subscribe,
    getState,
  };
}

export default createStore;

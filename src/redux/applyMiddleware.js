import compose from "./compose";

function applyMiddleware(...middlewares) {
  return (createStore) => {
    return (reducer) => {
      const store = createStore(reducer);
      let dispatch;
      const middlewareAPI = {
        dispatch: (action) => dispatch(action),
        getState: store.getState,
      };
      let chain = middlewares.map((middleware) => middleware(middlewareAPI));
      dispatch = compose(chain)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  };
}

export default applyMiddleware;

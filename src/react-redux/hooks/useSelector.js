import { useContext, useEffect, useReducer } from "react";

import ReactReduxContext from "../reactReduxContext";

function useSelector(selectorFn) {
  const { store } = useContext(ReactReduxContext);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    store.subscribe(() => {
      forceUpdate();
    });
  }, [store]);
  return selectorFn(store.getState());
}

export default useSelector;

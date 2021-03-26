import React, { useContext, useMemo, useEffect, useReducer } from "react";
import { bindActionCreators } from "../redux";
import ReactReduxContext from "./reactReduxContext";

function connect(mapStateToProps, mapDispatchToProps) {
  return (OldComponent) => {
    return (props) => {
      const { store } = useContext(ReactReduxContext);
      const [_, forceUpdate] = useReducer((x) => x + 1, 0);
      const state = store.getState();
      const propState = useMemo(() => mapStateToProps(state), [state]);
      let propDispatch;
      if (typeof mapDispatchToProps === "function") {
        propDispatch = mapDispatchToProps(store.dispatch);
      } else if (typeof mapDispatchToProps === "object") {
        propDispatch = bindActionCreators(mapDispatchToProps, store.dispatch);
      } else {
        propDispatch = { dispatch: store.dispatch };
      }
      useEffect(() => {
        store.subscribe(() => {
          forceUpdate();
        });
      }, [store]);
      return <OldComponent {...props} {...propState} {...propDispatch} />;
    };
  };
}

export default connect;

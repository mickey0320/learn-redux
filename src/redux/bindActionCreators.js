export function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

export function bindActionCreators(actions, dispatch) {
  if (typeof actions === "function") {
    return bindActionCreator(actions, dispatch);
  }
  const ret = {};
  for (let key in actions) {
    ret[key] = bindActionCreator(actions[key], dispatch);
  }

  return ret;
}

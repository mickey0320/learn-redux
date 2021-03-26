function combineReducers(reducers) {
  return (state = {}, action) => {
    const newState = {};
    const keys = Object.keys(reducers);
    for (let i = 0; i < keys.length; i++) {
      const previousStateForKey = state[keys[i]];
      const reducerForKey = reducers[keys[i]];
      newState[keys[i]] = reducerForKey(previousStateForKey, action);
    }

    return newState;
  };
}

export default combineReducers;

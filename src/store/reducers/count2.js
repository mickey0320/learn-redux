import { ADD2, MINUS2 } from "../constants";

const inisState = {
  num: 0,
};
export default (state = inisState, action) => {
  switch (action.type) {
    case ADD2:
      return {
        ...state,
        num: state.num + action.payload,
      };
    case MINUS2:
      return {
        ...state,
        num: state.num - action.payload,
      };
    default:
      return state;
  }
};

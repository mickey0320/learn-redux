import { ADD1, MINUS1 } from "../constants";

const inisState = {
  num: 0,
};
export default (state = inisState, action) => {
  switch (action.type) {
    case ADD1:
      return {
        ...state,
        num: state.num + action.payload,
      };
    case MINUS1:
      return {
        ...state,
        num: state.num - action.payload,
      };
    default:
      return state;
  }
};

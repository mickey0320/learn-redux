import { ADD1, MINUS1, ADD2, MINUS2 } from "./constants";

export function add1(payload) {
  return {
    type: ADD1,
    payload,
  };
}

export function minus1(payload) {
  return {
    type: MINUS1,
    payload,
  };
}

export function asyncAdd1() {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(add1(1));
    }, 1000);
  };
}

export function add2(payload) {
  return {
    type: ADD2,
    payload,
  };
}

export function minus2(payload) {
  return {
    type: MINUS2,
    payload,
  };
}

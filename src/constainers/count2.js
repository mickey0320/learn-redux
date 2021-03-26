import React from "react";
import { useSelector, useDispatch } from "../react-redux";

import { add2, minus2 } from "../store/action-types";

const Count2 = (props) => {
  const dispatch = useDispatch();
  const { num } = useSelector((state) => ({
    num: state.count2.num,
  }));
  return (
    <div className="count">
      <p>{num}</p>
      <button onClick={() => dispatch(add2(1))}>+1</button>
      <button onClick={() => dispatch(minus2(1))}>-1</button>
    </div>
  );
};

export default Count2;

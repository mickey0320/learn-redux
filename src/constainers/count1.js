import React from "react";

import { connect } from "../react-redux";
import { add1, minus1, asyncAdd1 } from "../store/action-types";

const Count1 = (props) => {
  return (
    <div className="count">
      <p>{props.num}</p>
      <button onClick={() => props.add1(1)}>+1</button>
      <button onClick={props.asyncAdd1}>异步+1</button>
      <button onClick={() => props.minus1(1)}>-1</button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  num: state.count1.num,
});

export default connect(mapStateToProps, {
  add1,
  minus1,
  asyncAdd1,
})(Count1);

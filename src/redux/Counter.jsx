import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
      </div>
    </div>
  );
};

export default Counter;

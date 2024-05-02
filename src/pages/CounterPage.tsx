import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { decrement, increment } from "../reducers/counter";

const CounterPage = () => {
  const { value } = useSelector((state: RootState) => state.counter);
  const dispatch: AppDispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default CounterPage;

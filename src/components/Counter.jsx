import classes from "./Counter.module.css";
import { counterAction } from "../store/reduxStore";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const { increment, decrement, increase, toggleCounter } = counterAction;
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const showcounter = useSelector((state) => state.isShowing);

  const toggleCounterHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };
  const incrementHandler = () => {
    dispatch(increment());
  };

  const increaseHandler = () => {
    dispatch(increase(20));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showcounter && <div className={classes.value}>{counter}</div>}
      <div className="">
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

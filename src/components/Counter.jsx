import classes from "./Counter.module.css";
import { counterActions } from "../store/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const { increment, decrement, increase, toggleCounter } = counterActions;
  const counter = useSelector((state) => state.counter.counter);
  console.log(counter);
  const showcounter = useSelector((state) => state.counter.isShowing);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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

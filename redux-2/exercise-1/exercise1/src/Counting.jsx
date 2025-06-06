import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/actions/actionCreators.js";
import "./counting.css";

export default function Counting() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: "center", alignContent: "center" }}>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </>
  );
}

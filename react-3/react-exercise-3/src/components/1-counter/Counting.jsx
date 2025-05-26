import { useState } from "react";

export default function Counting() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function restart() {
    setCount(0);
  }
  return (
    <>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={restart}>restart</button>
      <h1>{count}</h1>
    </>
  );
}

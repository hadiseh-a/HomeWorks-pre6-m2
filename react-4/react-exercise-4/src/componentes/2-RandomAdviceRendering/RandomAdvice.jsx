import { useEffect, useState } from "react";

export default function RandomAdvice() {
  const [data, setData] = useState();
  const [advice, setAdvice] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setData(data.slip.advice);
    }
    fetchData();
  },[]);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setAdvice(data);
          }}
        >
          get advice
        </button>
        <p>{advice}</p>
      </div>
    </>
  );
}

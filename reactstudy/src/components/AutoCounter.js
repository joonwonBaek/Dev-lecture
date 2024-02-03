import { useRef, useState } from "react";

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const intervalid = useRef();

  const handleStart = () => {
    intervalid.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalid.current);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};
export default AutoCounter;

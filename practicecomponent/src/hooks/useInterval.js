import useIntervalFn from "./useIntervalFn";

const { useEffect } = require("react");

const useInterval = (fn, ms) => {
  const [run, clear] = useIntervalFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};

export default useInterval;

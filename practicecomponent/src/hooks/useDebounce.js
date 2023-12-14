import useTimeoutFn from "../hooks/useTimeoutFn";

const useDebounce = (fn, ms, deps) => {
  const [run, clear] = useTimeoutFn(fn, ms);
};

export default useDebounce;

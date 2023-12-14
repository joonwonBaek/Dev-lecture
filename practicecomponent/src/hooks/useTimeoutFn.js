// 1. 함수 호출을 통한 방법
// 2. 컴포넌트가 로딩된 후 바로 실행되는 방법

import { useCallback, useEffect, useRef } from "react";

const useTimeoutFn = (fn, ms) => {
  const timeoutId = useRef();
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => clear, [clear]); // 훅이 사라질 때 clear 해줘야 한다.

  return [run, clear];
};

export default useTimeoutFn;

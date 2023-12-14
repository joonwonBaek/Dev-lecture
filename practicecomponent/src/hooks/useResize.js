import { useEffect, useRef } from "react";

const useResize = (handler) => {
  const savedHandler = useRef(handler);
  const ref = useRef(null);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      // element의 크기가 변하는 것을 감지하여 함수를 실행
      savedHandler.current(entries[0].contentRect);
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return ref;
};

export default useResize;

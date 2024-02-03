import React, { useImperativeHandle, useRef } from "react";

const Input = React.forwardRef((_, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current.value = "";
    },
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return (
    <>
      Input: <input ref={inputRef} />
    </>
  );
});

export default Input;

import { useCallback, useState } from "react";

const useToggle = (initialValue: boolean = false): [boolean, typeof toggle] => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export default useToggle;

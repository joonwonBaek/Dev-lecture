import { useState } from "react";
import useHotKey from "../../hooks/useHotKey";

export default {
  title: "Hooks/useHotkey",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const hotkeys = [
    {
      global: true,
      combo: "meta+shift+k",
      onKeyDown: (e) => {
        alert("ctrl+k");
      },
    },
    {
      combo: "esc",
      onKeyDown: (e) => {
        setValue("");
      },
    },
  ];

  const { handleKeyDown } = useHotKey(hotkeys);

  return (
    <div>
      useHotKey 테스트
      <div>
        <input
          onKeyDown={handleKeyDown}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

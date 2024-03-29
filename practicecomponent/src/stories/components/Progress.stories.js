import { useState } from "react";
import Progress from "../../components/base/Progress/Progress";

export default {
  title: "Components/Progress",
  component: Progress,
};

export const Default = () => {
  const [value, setValue] = useState(20);
  return (
    <div>
      <button onClick={() => setValue(100)}>change</button>
      <Progress value={value} />
    </div>
  );
};

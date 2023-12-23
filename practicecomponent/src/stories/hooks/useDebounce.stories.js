import { Fragment, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

export default {
  title: "Hooks/useDebounce",
};

const companies = [
  "Apple",
  "Google",
  "Microsoft",
  "Facebook",
  "Amazon",
  "Uber",
  "Airbnb",
  "Twitter",
];

export const Default = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  useDebounce(
    () => {
      if (value === "") setResult([]);
      else
        setResult(
          companies.filter((company) =>
            company.toLowerCase().includes(value.toLowerCase())
          )
        );
    },
    300,
    [value]
  );
  return (
    <div>
      <input
        type="text "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        {result.map((item) => (
          <Fragment key={item}>
            {item}
            <br />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

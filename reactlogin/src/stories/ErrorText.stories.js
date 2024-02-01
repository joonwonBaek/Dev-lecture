import ErrorText from "../components/ErrorText";

export default {
  title: "Components/ErrorText",
  component: ErrorText,
};

export const Default = (args) => {
  return <ErrorText {...args}> ErrorText </ErrorText>;
};

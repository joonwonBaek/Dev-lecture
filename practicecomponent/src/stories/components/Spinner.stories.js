import Spinner from "../../components/base/Spinner/Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: "number",
    },
    color: {
      control: "color",
    },
    loading: {
      control: "boolean",
    },
  },
  args: {
    size: 24,
    loading: true,
    color: "#919EAB",
  },
};

export const Default = (args) => {
  return <Spinner {...args} />;
};

import Toggle from "../../components/base/Toggle/Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    disable: { control: "boolean" },
  },
};

export const Default = (args) => {
  return <Toggle {...args} />;
};

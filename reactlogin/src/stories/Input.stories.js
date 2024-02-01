import Input from "../components/Input";

export default {
  title: "Components/Input",
  Comment: Input,
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export const Default = (args) => {
  return <Input {...args} />;
};

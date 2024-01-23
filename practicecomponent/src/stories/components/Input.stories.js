import Input from "../../components/base/Input/Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    block: { control: "boolean" },
    invalid: { control: "boolean" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
  },
  args: {
    label: "Label",
    block: false,
    invalid: false,
    required: false,
    disabled: false,
    readonly: false,
  },
};

export const Default = (args) => {
  return <Input {...args} />;
};

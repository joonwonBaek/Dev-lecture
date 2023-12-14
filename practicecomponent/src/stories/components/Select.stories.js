import Select from "../../components/Select/Select";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    label: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    block: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    block: false,
    invalid: false,
    required: false,
    disabled: false,
  },
};

export const Default = (args) => {
  return (
    <Select
      data={["Item1", "Item2", "Item3", { label: "Label", value: "value" }]}
      {...args}
    />
  );
};

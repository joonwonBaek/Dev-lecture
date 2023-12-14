import Header from "../../components/Header/Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    level: { control: { type: "range", min: 1, max: 10 } },
    strong: { control: { type: "boolean" } },
    underline: { control: { type: "boolean" } },
    color: { control: { type: "color" } },
  },
};

export const Default = (args) => {
  return <Header {...args}>Header</Header>;
};

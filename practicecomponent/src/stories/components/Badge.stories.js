import Badge from "../../components/Badge/Badge";
import Image from "../../components/Image/Image";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    count: { control: "number" },
    maxCount: { control: "number" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    showZero: { control: "boolean" },
  },
  args: {
    count: 10,
    maxCount: 99,
    showZero: false,
  },
};

export const Default = (args) => {
  return (
    <Badge {...args}>
      <Image
        src="https://picsum.photos/60"
        width={60}
        style={{ borderRadius: 8 }}
      />
    </Badge>
  );
};

export const Dot = () => {
  return (
    <Badge dot>
      <Image
        src="https://picsum.photos/60"
        width={40}
        style={{ borderRadius: 8 }}
      />
    </Badge>
  );
};

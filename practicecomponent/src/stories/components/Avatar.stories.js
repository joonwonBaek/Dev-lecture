import Avatar from "../../components/Avatar/Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    src: {
      type: { name: "string", required: true },
      control: { type: "text" },
    },
    shape: {
      control: "inline-radio",
      options: ["circle", "round", "square"],
    },
    size: {
      control: { type: "range", min: 40, max: 200 },
    },
    placeholder: {
      type: { name: "string" },
      control: { type: "text" },
    },
    threshold: {
      type: { name: "number" },
      control: { type: "number" },
    },

    alt: {
      control: "string",
    },
    mode: {
      options: ["cover", "contain", "fill"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    src: "https://picsum.photos/200/400",
    shape: "circle",
    size: 70,
    placeholder: "https://via.placeholder.com/200",
    threshold: 0,
    alt: "Image",
    mode: "cover",
  },
};

export const Default = (args) => {
  return <Avatar {...args} />;
};

export const Group = () => {
  return (
    <Avatar.Group size={40}>
      <Avatar src="https://picsum.photos/200/?1" />
      <Avatar src="https://picsum.photos/200/?2" />
      <Avatar src="https://picsum.photos/200/?3" />
      <Avatar src="https://picsum.photos/200/?4" />
    </Avatar.Group>
  );
};

import Image from "../../components/Image/Image";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    lazy: {
      control: { type: "boolean" },
    },
    block: {
      control: { type: "boolean" },
    },
    src: {
      type: { name: "string", required: true },
      control: { type: "text" },
    },
    placeholder: {
      type: { name: "string" },
      control: { type: "text" },
    },
    threshold: {
      type: { name: "number" },
      control: { type: "number" },
    },
    width: {
      control: { type: "range", min: 200, max: 600 },
    },
    height: {
      control: { type: "range", min: 200, max: 600 },
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
    lazy: false,
    block: false,
    src: "https://picsum.photos/200",
    placeholder: "https://via.placeholder.com/200",
    threshold: 0,
    width: 200,
    height: 200,
    alt: "Image",
    mode: "cover",
  },
};

export const Default = (args) => {
  return <Image {...args} />;
};

export const Lazy = (args) => {
  return (
    <div>
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        <Image
          {...args}
          lazy
          block
          src={`https://picsum.photos/200?${i}`}
          key={i}
        />
      ))}
    </div>
  );
};

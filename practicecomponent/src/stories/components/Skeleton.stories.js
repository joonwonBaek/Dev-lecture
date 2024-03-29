import Skeleton from "../../components/base/Skeleton/Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
};

export const Box = (args) => {
  return <Skeleton.Box {...args} />;
};
Box.argTypes = {
  width: { control: "number" },
  height: { control: "number" },
};
Box.args = {
  width: 200,
  height: 100,
};

export const Circle = (args) => {
  return <Skeleton.Circle {...args} />;
};

Circle.argTypes = {
  size: { control: "number" },
};
Circle.args = {
  size: 200,
};

export const Paragraph = (args) => <Skeleton.Paragraph {...args} />;
Paragraph.argTypes = {
  line: { control: "number" },
};
Paragraph.args = {
  line: 3,
};

export const Sample = () => {
  return (
    <>
      <div style={{ float: "left", marginRight: 16 }}>
        <Skeleton.Circle size={60} />
      </div>
      <div style={{ float: "left", width: "80%" }}>
        <Skeleton.Paragraph line={4} />
      </div>
      <div style={{ clear: "both" }} />
    </>
  );
};

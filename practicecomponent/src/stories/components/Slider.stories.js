import Slider from "../../components/base/Slider/Slider";
import Spacer from "../../components/base/Spacer/Spacer";
import Icon from "../../components/base/Icon/Icon";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    defaultValue: { control: "number" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    onChange: { action: "onChange" },
  },
  args: {
    defaultValue: 1,
    min: 1,
    max: 100,
    step: 0.1,
  },
};

export const Default = (args) => {
  return <Slider {...args} />;
};

export const VolumeControl = () => {
  return (
    <Spacer>
      <Icon name="volume" />
      <Slider style={{ width: 100, display: "inline-block" }} />
      <Icon name="volume-2" />
    </Spacer>
  );
};

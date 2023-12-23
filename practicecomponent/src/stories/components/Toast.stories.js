import Toast from "../../components/Toast/Toast";

export default {
  title: "Components/Toast",
};

export const Default = () => {
  return (
    <button onClick={() => Toast.show("안녕하세요", 3000)}>Show Toast</button>
  );
};

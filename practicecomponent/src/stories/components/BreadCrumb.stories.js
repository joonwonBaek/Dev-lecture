import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

export default {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
};

export const Default = () => {
  return (
    <BreadCrumb>
      <BreadCrumb.Item href="/home">Home</BreadCrumb.Item>
      <BreadCrumb.Item href="/level1">Level1</BreadCrumb.Item>
      <BreadCrumb.Item href="/level2">Level2</BreadCrumb.Item>
    </BreadCrumb>
  );
};

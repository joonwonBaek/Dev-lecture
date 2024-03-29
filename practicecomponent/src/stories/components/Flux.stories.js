import Flux from "../../components/base/Flux/Flux";

const { Row, Col } = Flux;

export default {
  title: "Components/Flux",
  component: Flux,
};

const Box = () => {
  return (
    <div
      style={{
        backgroundColor: "#44b",
        width: "100%",
        height: 24,
        color: "white",
        textAlign: "center",
        borderRadius: 8,
      }}
    >
      Box
    </div>
  );
};

export const Default = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
    </Row>
  );
};

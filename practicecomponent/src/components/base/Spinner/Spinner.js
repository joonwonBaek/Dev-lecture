import styled from "@emotion/styled";

const Icon = styled.div`
  box-sizing: border-box;
  border: 2px solid ${(props) => props.color};
  border-top-color: transparent;
  border-radius: 50%;
  animation: spinning 1s infinite linear;
  @keyframes spinning {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({
  size = 24,
  color = "#919EAB",
  loading = true,
  ...props
}) => {
  const sizeStyle = {
    width: size,
    height: size,
    color: color,
  };
  return loading && <Icon {...props} style={{ ...sizeStyle }} />;
};

export default Spinner;

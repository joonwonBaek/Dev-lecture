import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  color: white;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;

  &: hover {
    background-color: #222;
  }

  &: active {
    background-color: #333;
  }

  &: disabled {
    background-color: #999;
  }
`;

export default Button;

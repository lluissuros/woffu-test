import React from "react";
import styled from "styled-components";

const ErrorButton = styled.button`
  background: tomato;
  height: 40px;
  font-size: 16px;
  border: none;
`;

const ErrorResetButton = ({
  message = " message TODO",
  onClick = () => {}
}) => {
  return <ErrorButton onClick={onClick}>{message}</ErrorButton>;
};

export default ErrorResetButton;

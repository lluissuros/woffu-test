import React from "react";
import styled from "styled-components";

const ErrorButton = styled.button`
  background: tomato;
  height: 40px;
  font-size: 16px;
  border: none;
`;

const ErrorResetButton = ({
  message = "error message TODO",
  onClick = () => {
    console.log("missing click callback");
  }
}) => {
  return <ErrorButton onClick={onClick}>{message}</ErrorButton>;
};

export default ErrorResetButton;

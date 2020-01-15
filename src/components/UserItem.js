import React from "react";
import styled from "styled-components";

const ErrorButton = styled.button`
  background: tomato;
  height: 40px;
  font-size: 16px;
  border: none;
`;

const UserItem = ({ userName = "Name Missing" }) => {
  return <div>{message}</div>;
};

export default UserItem;

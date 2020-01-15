import React from "react";
import styled from "styled-components";

const UserContainer = styled.article`
  display: flex;
`;

const UserItem = ({ ...user }) => {
  console.log(user);
  return (
    <UserContainer>
      <div>{`${user.FirstName} ${user.LastName}`}</div>
      <div>{user.UserId}</div>
      <div>{`vacations: ${user.AllocatedDays} / ${user.AccumulatedDays}`}</div>
      <div>{`incorpoacion: ${user.EmployeeStartDate}`}</div>
    </UserContainer>
  );
};

export default UserItem;

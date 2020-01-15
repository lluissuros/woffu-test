import React from "react";
import Img from "react-image";
import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
`;

const UserInfo = styled.div`
  display: flex;
`;

const UserItem = ({ ...user }) => {
  console.log(user);
  return (
    <UserContainer>
      <UserInfo>
        <Img
          style={{ height: "32px", width: "32px", borderRadius: "50px" }}
          src={[
            user.ImageURL,
            "https://via.placeholder.com/36/FFBD4C/FFFFFF?Text=DL"
          ]}
        />
        <div>{`${user.FirstName} ${user.LastName}`}</div>
      </UserInfo>

      <div>{user.UserId}</div>

      <div>{`vacations: ${user.AllocatedDays} / ${user.AccumulatedDays}`}</div>

      <div>{`incorpoacion: ${user.EmployeeStartDate}`}</div>
    </UserContainer>
  );
};

export default UserItem;

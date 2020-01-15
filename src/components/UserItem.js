import React from "react";
import Img from "react-image";
import styled from "styled-components";

const UserInfo = styled.div`
  display: flex;
  flex: 3;
`;

const IdInfo = styled.div`
  flex: 1;
`;

const VacationsInfo = styled.div`
  flex: 3;
`;

const DateInfo = styled.div`
  flex: 3;
`;

const UserItem = ({ ...user }) => {
  const formatDate = date => `
  ${date.toLocaleDateString("en-US", {
    day: "numeric"
  })}/${date.toLocaleDateString("en-US", {
    month: "2-digit"
  })}/${date.toLocaleDateString("en-US", { year: "numeric" })}
  `;

  return (
    <React.Fragment>
      <UserInfo>
        <Img
          style={{
            height: "32px",
            width: "32px",
            borderRadius: "50px",
            marginRight: "16px"
          }}
          src={[
            user.ImageURL,
            `https://via.placeholder.com/36/FFBD4C/000000?text=${user.Acronym}`
          ]}
        />
        <div>{`${user.FirstName} ${user.LastName}`}</div>
      </UserInfo>
      <IdInfo>{user.UserId}</IdInfo>
      <VacationsInfo>{` ${user.AllocatedDays} / ${user.AccumulatedDays}`}</VacationsInfo>
      <DateInfo>{formatDate(user.EmployeeStartDate)}</DateInfo>
    </React.Fragment>
  );
};

export default UserItem;

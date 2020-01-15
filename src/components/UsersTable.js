import React, { useState } from "react";
import styled from "styled-components";
import DirectionSelector from "./DirectionSelector";
import UserItem from "./UserItem";

const Row = styled.article`
  display: flex;
  justify-content: space-between;
  height: 38px;
  padding-left: 20px;
  text-align: center;
`;

const HeaderRow = styled(Row)`
  background-color: ${props => props.theme.headerRowColor};
  box-shadow: 0 2px 4px 0 rgba(12, 0, 51, 0.05);
  font-size: 14px;
  margin-bottom: 10px;
`;

const UsersTable = ({ users }) => {
  const [sortedUsers, setSortedUsers] = useState(users);

  const sortBy = (sortField, ascending) => {
    const sortedUsers = users.sort((a, b) => {
      if (a[sortField] > b[sortField]) {
        return 1;
      }
      if (b[sortField] > a[sortField]) {
        return -1;
      }
      return 0;
    });
    if (ascending) {
      setSortedUsers(sortedUsers);
    } else {
      setSortedUsers([...sortedUsers].reverse());
    }
  };

  return (
    <section>
      <HeaderRow>
        <DirectionSelector
          flexGrow={3}
          text={"Informacion Personal"}
          onClickAscending={() => {
            sortBy("FirstName", true);
          }}
          onClickDescending={() => {
            sortBy("FirstName", false);
          }}
        ></DirectionSelector>
        <DirectionSelector
          flexGrow={1}
          text={"ID"}
          onClickAscending={() => {
            sortBy("UserId", true);
          }}
          onClickDescending={() => {
            sortBy("UserId", false);
          }}
        ></DirectionSelector>
        <DirectionSelector
          flexGrow={3}
          text={"Vacaciones"}
          onClickAscending={() => {
            sortBy("percentVacation", true);
          }}
          onClickDescending={() => {
            sortBy("percentVacation", false);
          }}
        ></DirectionSelector>
        <DirectionSelector
          flexGrow={3}
          text={"Fecha de incorporacion a la empresa"}
          onClickAscending={() => {
            sortBy("EmployeeStartDate", true);
          }}
          onClickDescending={() => {
            sortBy("EmployeeStartDate", false);
          }}
        ></DirectionSelector>
      </HeaderRow>

      {sortedUsers.map(user => (
        <Row key={user.UserId}>
          <UserItem {...user} />
        </Row>
      ))}
    </section>
  );
};

export default UsersTable;

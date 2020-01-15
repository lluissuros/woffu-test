import React from "react";
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

const UsersList = ({ users }) => {
  //order by goes here, so we need a first row with title

  return (
    <section>
      <HeaderRow>
        <DirectionSelector
          flexGrow={3}
          text={"Informacion Personal"}
        ></DirectionSelector>
        <DirectionSelector flexGrow={1} text={"ID"}></DirectionSelector>
        <DirectionSelector flexGrow={3} text={"Vacaciones"}></DirectionSelector>
        <DirectionSelector
          flexGrow={3}
          text={"Fecha de incorporacion a la empresa"}
        ></DirectionSelector>
      </HeaderRow>

      {users.map(user => (
        <Row>
          <UserItem {...user} />
        </Row>
      ))}
    </section>
  );
};

export default UsersList;

import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 38px;

  div:nth-child(1) {
    background: red;
    flex-grow: 3;
  }
  div:nth-child(2) {
    background: yellow;
    flex-grow: 1;
  }
  div:nth-child(3) {
    background: blue;
    flex-grow: 3;
  }
  div:nth-child(4) {
    background: green;
    flex-grow: 3;
  }
`;

const HeaderRow = styled(Row)`
  background-color: ${props => props.theme.headerRowColor};
  box-shadow: 0 2px 4px 0 rgba(12, 0, 51, 0.05);
`;

const UsersList = ({ userName = "Name Missing" }) => {
  //order by goes here, so we need a first row with title

  return (
    <section>
      <HeaderRow>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </HeaderRow>
      <ul>list here</ul>
    </section>
  );
};

export default UsersList;

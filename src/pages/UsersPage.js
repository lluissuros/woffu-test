import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getUsers } from "../api/usersApi";
import ErrorResetButton from "../components/ErrorResetButton";
import UsersTable from "../components/UsersTable";

const MainContainer = styled.main`
  background: ${props => props.theme.white};
  padding: 8px;
  width: 90%;
  margin: auto;
  margin-top: 37px;
  box-shadow: 0 2px 4px 0 rgba(12, 0, 51, 0.1);
`;

const UsersPage = () => {
  const [hasError, setHasError] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = () => {
    setHasError(false);
    const onGetUsersSuccesCb = usersResponse => {
      setUsers(usersResponse);
    };
    const onGetUsersErrorCb = e => {
      setHasError(true);
    };
    getUsers(onGetUsersSuccesCb, onGetUsersErrorCb);
  };

  return (
    <MainContainer>
      {!users && !hasError && <div>LOADING...</div>}
      {hasError && (
        <ErrorResetButton
          message={"Error, click to try again"}
          onClick={handleGetUsers}
        />
      )}
      {/* calendar filter selector */}
      {users && <UsersTable users={users} />}
    </MainContainer>
  );
};

export default UsersPage;

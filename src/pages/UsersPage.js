import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

import { getUsers } from "../api/usersApi";
import ErrorResetButton from "../components/ErrorResetButton";
import UsersTable from "../components/UsersTable";
import CalendarSelector from "../components/CalendarSelector";

const MainContainer = styled.main`
  background: ${props => props.theme.white};
  padding: 8px;
  width: 90%;
  max-width: 1100px;
  margin: auto;
  margin-top: 37px;
  box-shadow: 0 2px 4px 0 rgba(12, 0, 51, 0.1);
`;

const spinnerStyle = css`
  display: block;
  margin: 0 auto;
  border-color: #2c7fe2;
`;

const UsersPage = () => {
  const [hasError, setHasError] = useState(false);
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = () => {
    setHasError(false);
    const onGetUsersSuccesCb = usersResponse => {
      setUsers(usersResponse);
      setFilteredUsers(usersResponse);
    };
    const onGetUsersErrorCb = e => {
      setHasError(true);
    };
    getUsers(onGetUsersSuccesCb, onGetUsersErrorCb);
  };

  const filterByDates = (startDate, endDate) => {
    const filteredUsers = users.filter(
      user =>
        user.EmployeeStartDate > startDate && user.EmployeeStartDate < endDate
    );
    setFilteredUsers(filteredUsers);
  };

  return (
    <MainContainer>
      {!users && !hasError && <ClipLoader css={spinnerStyle} size={250} />}
      {hasError && (
        <ErrorResetButton
          message={"Error, click to try again"}
          onClick={handleGetUsers}
        />
      )}
      <CalendarSelector
        onSelectedDates={(startDate, endDate) =>
          filterByDates(startDate, endDate)
        }
      />
      {filteredUsers && <UsersTable users={filteredUsers} />}
    </MainContainer>
  );
};

export default UsersPage;

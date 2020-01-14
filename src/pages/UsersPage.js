import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getUsers } from "../api/usersApi";
import ErrorResetButton from "../components/ErrorResetButton";

const UsersPage = () => {
  const [hasError, setHasError] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = () => {
    const onGetUsersSucces = usersResponse => {
      console.log("succes");
      setHasError(false);
      setUsers(usersResponse);
    };
    const onGetUsersError = () => {
      console.log("error!!!");
      setHasError(true);
    };
    getUsers(onGetUsersSucces, onGetUsersError);
  };

  return (
    <React.Fragment>
      {!users && !hasError && <div>LOADING...</div>}
      {hasError && (
        <ErrorResetButton
          message={"Error, click to try again"}
          onClick={handleGetUsers}
        />
      )}
      {users && <section>{JSON.stringify(users)}</section>}
    </React.Fragment>
  );
};

export default UsersPage;

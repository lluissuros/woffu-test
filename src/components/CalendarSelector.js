import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Row } from "./SharedStyledComponents";
import ErrorResetButton from "./ErrorResetButton";

const Input = styled.input`
  outline: none;
  height: 36px;
  width: 136px;
  font-size: 16px;
  margin-left: 12px;
  padding-left: 6px;
  box-sizing: border-box;
  border: 2px solid
    ${props =>
      props.error
        ? "red"
        : props.value.length === 10
        ? "#8bc34a" // green
        : "#C2BFCC"};
  border-radius: 3px;
`;

const CalendarInput = ({ onSelectedDate }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleOnChange = value => {
    const numberPattern = /\d+/g;
    const onlyNumbers = value.match(numberPattern)
      ? value.match(numberPattern).join("")
      : "";
    const dd = onlyNumbers.slice(0, 2);
    if (dd.length < 2) {
      setValue(dd);
      return;
    }
    const mm = onlyNumbers.slice(2, 4);
    if (mm.length < 2) {
      setValue(`${dd}/${mm}`);
      return;
    }
    const yyyy = onlyNumbers.slice(4, 8);
    setValue(`${dd}/${mm}/${yyyy}`);
  };

  useEffect(() => {
    if (value.length === 10) {
      const selectedDate = new Date(value);
      const isValidDate = selectedDate.getTime() ? true : false;
      if (!isValidDate || selectedDate > Date.now()) {
        setError(true);
        return;
      }
      onSelectedDate(selectedDate);
    }
    setError(false);
  }, [onSelectedDate, value]);

  return (
    <Input
      value={value}
      error={error}
      onChange={e => handleOnChange(e.target.value)}
    ></Input>
  );
};

const CalendarSelector = ({ onSelectedDates = () => {} }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      if (startDate > endDate) {
        setHasError(true);
        return;
      } else {
        setHasError(false);
      }
      onSelectedDates(startDate, endDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  return (
    <Row height={50}>
      <div>EQUIPO</div>
      {hasError && (
        <ErrorResetButton
          message="end date needs to be bigger"
          onClick={() => {}}
        />
      )}
      <div>
        <CalendarInput onSelectedDate={setStartDate} />
        <CalendarInput onSelectedDate={setEndDate} />
      </div>
    </Row>
  );
};

export default CalendarSelector;

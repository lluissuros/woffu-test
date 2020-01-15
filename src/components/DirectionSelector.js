import React from "react";
import styled from "styled-components";

const DirectionSelector = ({
  text = "missing",
  flexGrow = 1,
  onClickAscending = () => {},
  onClickDescending = () => {}
}) => {
  const Container = styled.div`
    flex: ${props => props.flexGrow};
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
  `;
  const ArrowContainer = styled.div`
    padding: 2px;
    font-size: 20px;
    line-height: 11px;
    div:nth-child(1) {
      cursor: n-resize;
    }
    div:nth-child(2) {
      cursor: s-resize;
    }
  `;

  return (
    <Container flexGrow={flexGrow}>
      <div>{text}</div>
      <ArrowContainer>
        <div onClick={onClickAscending}>▴</div>
        <div onClick={onClickDescending}>▾</div>
      </ArrowContainer>
    </Container>
  );
};

export default DirectionSelector;

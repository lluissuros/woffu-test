import styled from "styled-components";

const Row = styled.article`
  display: flex;
  justify-content: space-between;
  height: ${props => (props.height ? props.height : 38)}px;
  padding-left: 20px;
  text-align: center;
`;

export { Row };

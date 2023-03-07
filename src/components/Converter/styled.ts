import styled from "styled-components";

const StyledConverter = styled.div`
  width: 90%;
  max-width: 500px;
`;

const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 1fr;
`;

const Separator = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;

  svg {
    width: 30px;
  }
`;

export { StyledConverter, Row, Separator };

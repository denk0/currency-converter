import styled from "styled-components";

const StyledCurrencyRatesList = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Item = styled.div`
  & + & {
    margin-left: 20px;
  }
`;

export { StyledCurrencyRatesList, Item };

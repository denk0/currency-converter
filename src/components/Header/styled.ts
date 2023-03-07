import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 20px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${({ theme }) => theme.palette.common.black};
`;

export { StyledHeader };

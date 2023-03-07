import styled, { css } from "styled-components";

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

const SelectLabelButton = styled.button`
  width: 100%;
  font-weight: 500;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.1s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;

const Dropdown = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fafafa;
  border: 1.5px solid slategrey;
  transition: max-height 0.2s ease;
  overflow: scroll;

  ${(p) =>
    p.isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
`;

const DropdownItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 0.3rem;
  cursor: pointer;

  ${(p) =>
    p.active &&
    css`
      color: ${({ theme }) => theme.palette.common.black};
      font-weight: 500;
    `}

  &:hover, :focus, :focus:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    outline: none;
  }
`;

export { SelectContainer, SelectLabelButton, DropdownItem, Dropdown };

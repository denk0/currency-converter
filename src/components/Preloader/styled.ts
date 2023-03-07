import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(0.2, 0.2, 0.2);
  }
`;
const pulse2 = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(0, 0, 0);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const pulse3 = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(0, 0, 0);
  }
  90% {
    transform: scale3d(1, 1, 1);
  }
`;

const StyledPreloader = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;

  .loader-1 {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 50%;
    float: left;
    z-index: 9;
    position: absolute;
    left: 20px;
    top: 20px;
    animation-name: ${pulse};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: center;
    animation-delay: 0s;
    transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .loader-2 {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 50%;
    float: left;
    z-index: 8;
    opacity: 0.7;
    position: absolute;
    left: 10px;
    top: 10px;
    animation-name: ${pulse2};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: 0.3s;
    transform-origin: center;
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .loader-3 {
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 50%;
    float: left;
    z-index: 7;
    opacity: 0.4;
    position: absolute;
    left: 0;
    top: 0;
    animation-name: ${pulse3};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: 0.5s;
    transform-origin: center;
    transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

export { StyledPreloader };

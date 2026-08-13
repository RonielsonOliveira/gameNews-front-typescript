import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    inset: 0;
    z-index: 9999;

    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.background};
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Spinner = styled.div`
  ${({ theme }) => css`
    width: 42px;
    height: 42px;

    box-sizing: border-box;

    border: 4px solid ${theme.colors.primary};
    border-top: 4px solid ${theme.colors.text};

    border-radius: 50%;

    animation-name: ${spin};
    animation-duration: 0.6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    margin-top: 6px;

    font-size: ${theme.font.sizes.normal};
    color: ${theme.colors.primary};
  `}
`;

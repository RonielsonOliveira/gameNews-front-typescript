import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.medium};

    background-color: ${theme.colors.background};
    color: ${theme.colors.primary};
  `}
`;

export const Spinner = styled.div`
  ${({ theme }) => css`
    width: 45px;
    height: 45px;

    border: 4px solid ${theme.colors.surfaceLight};
    border-top-color: ${theme.colors.primary};

    border-radius: 50%;

    animation: ${spin} 0.8s linear infinite;
  `}
`;

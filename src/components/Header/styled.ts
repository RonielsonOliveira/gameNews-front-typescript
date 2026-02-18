import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};

    background: ${theme.colors.primary};
    text-align: center;
    padding: ${theme.spacings.medium};
  `}

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;

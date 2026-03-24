import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${theme.spacings.xxsmall};
  `}

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 25px;
    padding: 4px;
  }

  a:hover img {
    transform: scale(1.05);
  }
`;

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
  }

  img {
    width: 140px;
    height: auto;
    max-width: 100%;
    object-fit: contain;
    transition: transform 0.2s ease-in-out;
  }

  a:hover img {
    transform: scale(1.05);
  }
`;

import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.medium} 0;
    font-style: italic;
  `}
`;

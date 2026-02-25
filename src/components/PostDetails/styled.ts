import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.medium} 0;
    font-style: italic;
  `}
`;
export const CategoryLink = styled(Link)`
  color: #7c5cff;
  font-weight: 600;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

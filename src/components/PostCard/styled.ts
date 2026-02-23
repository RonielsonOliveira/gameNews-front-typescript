import styled, { css } from "styled-components";

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: fill;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.normal};
    width: 100%;
    height: 120px;

    a {
      text-align: center;
      color: ${theme.colors.white};
    }
  `}
`;

import styled, { css } from "styled-components";

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  width: 100%;
  height: 220px;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;

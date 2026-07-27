import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.surface};
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid ${theme.colors.surfaceLight};

    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      border-color 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      border-color: ${theme.colors.primary};
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
    }
  `}
`;

export const PostCardCover = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: transform 0.4s ease;
  }

  ${Container}:hover & img {
    transform: scale(1.08);
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 90px;
    padding: ${theme.spacings.medium};

    font-size: ${theme.font.sizes.normal};
    font-weight: 700;
    line-height: 1.5;
    text-align: center;

    a {
      color: ${theme.colors.white};
      text-decoration: none;
      transition: color 0.25s ease;
    }

    ${Container}:hover & a {
      color: ${theme.colors.text};
    }
  `}
`;

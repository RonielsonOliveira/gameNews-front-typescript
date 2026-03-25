import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.xxsmall};
  `}

  a:hover img {
    transform: scale(1.05);
  }
`;
export const LogoWrapper = styled.div`
  display: flex;

  padding-left: 480px;
  img {
    width: 140px;
    height: 75px;
  }
`;
export const CategoriesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacings.xxsmall};
  padding-right: 480px;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 25px;
    padding: 4px;
  }
`;
export const MenuLink = styled.div`
  position: relative;
  margin: 0.3rem small 0;
  text-decoration: none;
  text-align: center;
  &:hover {
    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 0.3rem;
      background-color: ${({ color }) => color || "wheat"};
      animation: hoverAnimation 0.2s forwards;
    }
    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  }
`;

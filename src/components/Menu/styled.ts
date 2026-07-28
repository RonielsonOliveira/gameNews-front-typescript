import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    z-index: 999;

    width: 100%;

    background: #0f0f10;

    border-bottom: 4px solid ${theme.colors.primary};

    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.35);
  `}
`;

export const InnerContainer = styled.div`
  ${({ theme }) => css`
    max-width: 128rem;
    height: 78px;

    margin: 0 auto;
    padding: 0 ${theme.spacings.large};

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      height: 72px;
      padding: 0 ${theme.spacings.medium};
    }
  `}
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  img {
    width: 125px;
    height: auto;

    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  &:hover img {
    transform: scale(1.03);
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    img {
      width: 140px;
    }
  }
`;

export const MobileButton = styled.button`
  ${({ theme }) => css`
    display: none;

    width: 48px;
    height: 48px;

    border: none;
    border-radius: 8px;

    background: transparent;

    color: ${theme.colors.white};

    font-size: 3rem;

    cursor: pointer;

    transition:
      background 0.25s,
      color 0.25s,
      transform 0.25s;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: ${theme.colors.primary};
      transform: rotate(90deg);
    }

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const CategoriesWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

interface MenuLinkProps {
  color?: string;
}

export const MenuLink = styled.div<MenuLinkProps>`
  ${({ theme, color }) => css`
    position: relative;

    a {
      position: relative;

      display: flex;
      align-items: center;

      height: 38px;

      color: #d5d5d5;

      text-decoration: none;

      font-size: 1.45rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;

      transition: color 0.25s ease;
    }

    &::after {
      content: "";

      position: absolute;

      left: 50%;
      bottom: 0;

      width: 0;
      height: 4px;

      transform: translateX(-50%);

      border-radius: 999px;

      background: ${color || theme.colors.primary};

      transition: width 0.25s ease;
    }

    &:hover a {
      color: ${color || theme.colors.primary};
    }

    &:hover::after {
      width: 100%;
    }
  `}
`;

export const MobileMenu = styled.div<{ isopen: boolean }>`
  ${({ isopen, theme }) => css`
    position: absolute;

    top: 100%;
    left: 0;

    width: 100%;

    background: #121212;

    border-top: 1px solid rgba(255, 255, 255, 0.08);

    display: flex;
    flex-direction: column;

    overflow: hidden;

    max-height: ${isopen ? "420px" : "0"};

    transition:
      max-height 0.35s ease,
      border-color 0.35s ease;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 60px;

      color: ${theme.colors.white};

      text-decoration: none;
      text-transform: uppercase;

      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 1px;

      border-bottom: 1px solid rgba(255, 255, 255, 0.06);

      transition:
        background 0.25s ease,
        color 0.25s ease,
        padding-left 0.25s ease;
    }

    a:last-child {
      border-bottom: none;
    }

    a:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding-left: 10px;
    }

    @media (min-width: 769px) {
      display: none;
    }
  `}
`;

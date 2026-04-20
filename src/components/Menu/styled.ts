import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.xxsmall};
    position: relative;
  `}
`;
export const InnerContainer = styled.div`
  ${({ theme }) => css`
    max-width: 96rem;
    margin: 0 auto;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.xxsmall};
  `}
`;
export const LogoWrapper = styled.div`
  img {
    width: 120px;
    height: 65px;
  }
`;

/* BOTÃO MOBILE */
export const MobileButton = styled.button`
  display: none;
  font-size: 28px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacings.small};

  @media (max-width: 768px) {
    display: block;
  }
`;

/* MENU DESKTOP */
export const CategoriesWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xxsmall};

  a {
    position: relative;
    display: inline-block;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 25px;
    padding: 4px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* MENU MOBILE */
export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: black;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  a {
    padding: 12px;
    color: white;
    text-decoration: none;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MenuLink = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 0;
    bottom: -4px;
    left: 50%;
    background-color: ${({ color }) => color || "white"};
    transition: all 0.2s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

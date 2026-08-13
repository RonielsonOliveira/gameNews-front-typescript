import styled, { css } from "styled-components";

export const Banner = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 420px;

    overflow: hidden;
    border-radius: 1.2rem;
    background: ${theme.colors.background};
    @media (max-width: 768px) {
      height: 360px;
    }
  `}
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;

  img {
    object-fit: cover;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0.25) 75%,
    rgba(0, 0, 0, 0.05) 100%
  );
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 55%;
    height: 100%;
    padding: ${theme.spacings.large};

    color: #fff;

    @media (max-width: 768px) {
      width: 100%;
      padding: ${theme.spacings.large};

      justify-content: flex-end;
      padding-bottom: 5rem;
    }
  `}
`;

export const Category = styled.span`
  ${({ theme }) => css`
    width: fit-content;
    margin-bottom: ${theme.spacings.small};

    font-size: ${theme.font.sizes.small};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.08em;

    color: ${theme.colors.primary};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    max-width: 700px;

    font-size: clamp(2rem, 4vw, 4rem);
    line-height: 1.05;
    font-weight: 800;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    max-width: 600px;
    margin: ${theme.spacings.medium} 0 0;

    font-size: ${theme.font.sizes.medium};
    line-height: 1.6;

    color: rgba(255, 255, 255, 0.85);

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

export const ReadMore = styled.a`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;

    width: fit-content;

    margin-top: ${theme.spacings.large};
    padding: 1rem 1.5rem;

    border-radius: 0.5rem;

    background: ${theme.colors.primary};
    color: #fff;

    font-size: ${theme.font.sizes.small};
    font-weight: bold;
    text-decoration: none;

    transition:
      transform 0.2s ease,
      opacity 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      opacity: 0.9;
    }
  `}
`;

export const Navigation = styled.div`
  position: absolute;
  z-index: 3;

  right: 2rem;
  bottom: 2rem;

  display: flex;
  gap: 0.5rem;
`;

export const ArrowButton = styled.button`
  ${({ theme }) => css`
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;

    background: rgba(0, 0, 0, 0.3);
    color: #fff;

    font-size: 1.2rem;

    cursor: pointer;

    transition:
      background 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background: ${theme.colors.primary};
      transform: scale(1.05);
    }
  `}
`;

export const Dots = styled.div`
  position: absolute;
  z-index: 3;

  left: 50%;
  bottom: 2rem;

  display: flex;
  gap: 0.5rem;

  transform: translateX(-50%);
`;

export const Dot = styled.button<{ $active: boolean }>`
  ${({ $active }) => css`
    width: ${$active ? "28px" : "8px"};
    height: 8px;

    padding: 0;
    border: 0;
    border-radius: 999px;

    background: ${$active
      ? "rgba(255, 255, 255, 1)"
      : "rgba(255, 255, 255, 0.45)"};

    cursor: pointer;

    transition:
      width 0.3s ease,
      background 0.3s ease;
  `}
`;

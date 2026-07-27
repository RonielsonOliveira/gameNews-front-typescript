import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    margin-top: 6rem;
    padding: 4rem 2rem;

    background: #0f0f10;

    border-top: 4px solid ${theme.colors.secondary};

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    color: #b8b8b8;
    min-height: 100px;
    font-size: ${theme.font.sizes.small};
    line-height: 1.8;

    box-shadow: 0 -8px 25px rgba(0, 0, 0, 0.25);

    p {
      margin: 0;
      max-width: 70rem;
    }

    strong {
      color: ${theme.colors.white};
      font-weight: 600;
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      transition: color 0.25s ease;
    }

    a:hover {
      color: ${theme.colors.white};
    }

    @media (max-width: 768px) {
      padding: 3rem 1.6rem;
      font-size: 1.3rem;
    }
  `}
`;

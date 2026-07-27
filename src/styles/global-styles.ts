import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    height: 100%;
  }

  body{
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    font-size: ${({ theme }) => theme.font.sizes.medium};
    background-color: ${({ theme }) => theme.colors.background};
  }

  #__next{
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  main{
    flex: 1;
  }

  a{
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  p{
    color: ${({ theme }) => theme.colors.white};
    transition: opacity .3s ease;
  }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${({ theme }) => theme.font.sizes.medium};
    background-color: ${({ theme }) => theme.colors.darkGray};

  }
  a{
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
   p{
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;

  }
  link{
    color:red;
  }


`;

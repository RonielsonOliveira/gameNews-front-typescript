import "../styles/global-styles";
import { ThemeProvider } from "styled-components";

import { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/global-styles";
import { theme } from "@/styles/theme";
import { RouteLoading } from "@/components/RouteLoading";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RouteLoading />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;

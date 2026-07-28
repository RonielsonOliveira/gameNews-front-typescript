import type { Preview } from "@storybook/nextjs-vite";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";
import { GlobalStyles } from "../src/styles/global-styles";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};
const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
      <GlobalStyles />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];

// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Helvetica Neue, Helvetica, Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
      },
    },
  },
});

export default theme;

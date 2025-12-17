"use client";

import { createTheme } from "@mui/material/styles";
import { inter, lusitana } from "./fonts";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data",
  },
  colorSchemes: { light: true, dark: true },
  typography: {
    fontFamily: inter.style.fontFamily,
    h5: {
      fontFamily: lusitana.style.fontFamily,
    },
    h6: {
      fontFamily: lusitana.style.fontFamily,
    },
  },
});

export default theme;

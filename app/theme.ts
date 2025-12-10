"use client";

import { createTheme } from "@mui/material/styles";
import { inter } from "./ui/fonts";

const theme = createTheme({
    colorSchemes: { light: true, dark: true },
    typography: {
        fontFamily: inter.style.fontFamily
    }
});

export default theme;
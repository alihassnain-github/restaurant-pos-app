import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import theme from "./theme";
import { inter } from "./fonts";
import { InitColorSchemeScript } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <InitColorSchemeScript attribute="data" defaultMode="system" />
        <ThemeProvider defaultMode="system" theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

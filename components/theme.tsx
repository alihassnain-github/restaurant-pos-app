"use client";

import IconButton from "@mui/material/IconButton";
import { useColorScheme } from "@mui/material/styles";
import { BedtimeOutlined, WbSunnyOutlined } from "@mui/icons-material";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  const handleToggle = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <IconButton onClick={handleToggle} color="inherit">
      {mode === "light" ? <BedtimeOutlined /> : <WbSunnyOutlined />}
    </IconButton>
  );
}

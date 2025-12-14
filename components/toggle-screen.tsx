"use client";

import { Fullscreen, FullscreenExit } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function ScreenToggle() {
  const [fullScreen, setFullScreen] = useState(false);

  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }

    setFullScreen(!fullScreen);
  }

  return (
    <IconButton
      onClick={toggleFullScreen}
      color="inherit"
      aria-label="full screen"
    >
      {fullScreen ? <FullscreenExit /> : <Fullscreen />}
    </IconButton>
  );
}

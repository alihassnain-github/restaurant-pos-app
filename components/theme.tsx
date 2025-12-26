'use client';

import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import { BedtimeOutlined, WbSunnyOutlined } from '@mui/icons-material';

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  return (
    <IconButton
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      color="inherit"
    >
      {mode === 'light' ? <BedtimeOutlined /> : <WbSunnyOutlined />}
    </IconButton>
  );
}

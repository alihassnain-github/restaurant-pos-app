"use client";

import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ThemeToggle() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }

    const handleToggle = () => {
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    };

    return (
        <IconButton
            onClick={handleToggle}
            color="inherit"
            title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
        >
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
}
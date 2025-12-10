"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Fullscreen } from '@mui/icons-material';
import UserMenu from './user-menu';
import NotificationsMenu from './notifications-menu';
import ThemeToggle from './theme';
import Divider from '@mui/material/Divider';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <ThemeToggle />
                    <IconButton color="inherit" aria-label="full screen">
                        <Fullscreen />
                    </IconButton>
                    <Divider orientation="vertical" variant='middle' flexItem />
                    <NotificationsMenu />
                    <UserMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

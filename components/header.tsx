'use client';

import { styled } from '@mui/material/styles';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import UserMenu from './user-menu';
import NotificationsMenu from './notifications-menu';
import ThemeToggle from './theme';
import Divider from '@mui/material/Divider';
import ScreenToggle from './toggle-screen';
import { useSidebarProps, drawerWidth } from '@/context/sidebar-provider';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerwidth?: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerwidth',
})<AppBarProps>(({ theme, open, drawerwidth = 240 }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('lg')]: {
    ...(open && {
      width: `calc(100% - ${drawerwidth}px)`,
      marginLeft: `${drawerwidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  },
}));

export default function Header() {
  const { isDrawerOpen, handleDrawerToggle } = useSidebarProps();

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <AppBar position="fixed" open={isDrawerOpen} drawerwidth={drawerWidth}>
      <Toolbar>
        <IconButton
          sx={[isLargeScreen && isDrawerOpen && { display: 'none' }]}
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <ThemeToggle />
          <ScreenToggle />
          <Divider orientation="vertical" variant="middle" flexItem />
          <NotificationsMenu />
          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

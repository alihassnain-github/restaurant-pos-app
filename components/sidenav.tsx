'use client';

import { styled, useTheme } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NavLinks from './nav-links';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Webhook } from '@mui/icons-material';
import Link from 'next/link';
import { useSidebarProps, drawerWidth } from '@/context/sidebar-provider';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

export default function SideNav() {
  const { handleDrawerClose, isLargeScreen, isDrawerOpen } = useSidebarProps();

  const theme = useTheme();

  const drawerContent = (
    <>
      <DrawerHeader>
        <Box></Box>
        <Link
          href={'/dashboard'}
          style={{ display: 'flex', alignItems: 'center', gap: 5 }}
        >
          <Webhook color="primary" />
          <Typography
            variant="h5"
            noWrap
            component="h5"
            sx={{ fontWeight: 400, letterSpacing: '.05rem' }}
          >
            VEND
          </Typography>
        </Link>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <SimpleBar style={{ overflowY: 'auto', height: '100%' }}>
        <List>
          <NavLinks />
        </List>
      </SimpleBar>
    </>
  );

  // Large screens: persistent drawer (pushes content)
  if (isLargeScreen) {
    return (
      <Drawer
        sx={{
          width: isDrawerOpen ? drawerWidth : 0,
          flexShrink: 0,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(isDrawerOpen && {
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
      >
        {drawerContent}
      </Drawer>
    );
  }

  // Small/Medium screens: temporary drawer (overlay)
  return (
    <Drawer
      variant="temporary"
      open={isDrawerOpen}
      onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true, // Better mobile performance
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}

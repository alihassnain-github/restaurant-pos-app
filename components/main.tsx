'use client';

import { ReactNode } from 'react';
import { styled } from '@mui/material';
import { drawerWidth, useSidebarProps } from '@/context/sidebar-provider';

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  minHeight: '100vh',
  flexGrow: 1,
  padding: theme.spacing(3),
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: '100%',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MainWrapper({ children }: { children: ReactNode }) {
  const { isLargeScreen, desktopOpen } = useSidebarProps();

  return (
    <Main open={isLargeScreen && desktopOpen}>
      <DrawerHeader />
      {children}
    </Main>
  );
}

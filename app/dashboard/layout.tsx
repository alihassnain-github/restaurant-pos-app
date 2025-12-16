"use client";

import * as React from "react";
import { styled, useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SideNav from "@/components/sidenav";
import Header from "@/components/header";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
  [theme.breakpoints.down("lg")]: {
    marginLeft: 0,
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [desktopOpen, setDesktopOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    if (isLargeScreen) {
      setDesktopOpen(!desktopOpen);
    } else {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerClose = () => {
    if (isLargeScreen) {
      setDesktopOpen(false);
    } else {
      setMobileOpen(false);
    }
  };

  const isDrawerOpen = isLargeScreen ? desktopOpen : mobileOpen;

  return (
    <Box sx={{ display: "flex" }} component={Paper}>
      <Header
        open={isDrawerOpen}
        onMenuClick={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />

      <SideNav
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        drawerWidth={drawerWidth}
        isLargeScreen={isLargeScreen}
      />

      <Main open={isLargeScreen && desktopOpen} sx={{ minHeight: "100dvh", width: "100%" }}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}

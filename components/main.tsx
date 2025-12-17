"use client";

import { ReactNode } from "react";
import { styled } from "@mui/material";
import { drawerWidth, useSidebarProps } from "@/context/sidebar-provider";

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

export default function MainWrapper({ children }: { children: ReactNode }) {
    const { isLargeScreen, desktopOpen } = useSidebarProps();

    return (
        <Main
            open={isLargeScreen && desktopOpen}
            sx={{ minHeight: "100dvh", width: "100%" }}
        >
            <DrawerHeader />
            {children}
        </Main>
    );
}

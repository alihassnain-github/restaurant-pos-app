"use client";

import { PageLoader } from "@/components/loader";
import { useTheme, useMediaQuery } from "@mui/material";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type SidebarContextType = {
    isDrawerOpen: boolean;
    handleDrawerToggle: () => void;
    handleDrawerClose: () => void;
    isLargeScreen: boolean;
    desktopOpen: boolean;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export const drawerWidth = 240;

export default function SidebarContextProvider({
    children,
}: {
    children: ReactNode;
}) {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"), { noSsr: true });

    const [mobileOpen, setMobileOpen] = useState(false);
    const [desktopOpen, setDesktopOpen] = useState(true);

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

    if (typeof window === "undefined") {
        return <PageLoader />;
    }

    return (
        <SidebarContext.Provider
            value={{
                handleDrawerClose,
                handleDrawerToggle,
                isDrawerOpen,
                isLargeScreen,
                desktopOpen,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebarProps() {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error("");
    }

    return context;
}

import Header from "@/components/header";
import SideNav from "@/components/sidenav";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="grow">
                <Header />
                <Box>
                    {children}
                </Box>
            </div>
        </div>
    );
}
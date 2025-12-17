import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SideNav from "@/components/sidenav";
import Header from "@/components/header";
import MainWrapper from "@/components/main";
import SidebarContextProvider from "@/context/sidebar-provider";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarContextProvider>
      <Box sx={{ display: "flex" }} component={Paper}>
        <Header />

        <SideNav />

        <MainWrapper>{children}</MainWrapper>
      </Box>
    </SidebarContextProvider>
  );
}

import TablesTable from "@/components/ui/tables/table";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CreateTable } from "@/components/ui/tables/buttons";

export default function Page() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          mb: 2,
        }}
      >
        <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
          Tables
        </Typography>
        <CreateTable />
      </Box>
      <TablesTable />
    </>
  );
}

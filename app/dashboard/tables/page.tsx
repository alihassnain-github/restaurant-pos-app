import TablesTable from "@/components/ui/tables/table";
import Typography from "@mui/material/Typography";

export default function Page() {
  return (
    <>
      <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
        Tables
      </Typography>
      <TablesTable />
    </>
  );
}

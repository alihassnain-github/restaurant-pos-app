import { CreateCategory } from "@/components/ui/categories/buttons";
import Box from "@mui/material/Box";
import CategoriesTable from "@/components/ui/categories/table";
import Typography from "@mui/material/Typography";

export default function Page() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", mb: 2 }}>
        <Typography variant="h5" component="h5">
          Categories
        </Typography>
        <CreateCategory />
      </Box>
      <CategoriesTable />
    </>
  );
}

import Search from '@/components/search';
import { CreateUser } from '@/components/ui/users/buttons';
import SelectRoles from '@/components/ui/users/select-roles';
import UsersTable from '@/components/ui/users/users-table';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          mb: 2,
        }}
      >
        <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
          Users
        </Typography>
        <CreateUser />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Search placeholder="Search user…" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <SelectRoles />
          </Grid>
        </Grid>
      </Box>
      <UsersTable />
    </>
  );
}

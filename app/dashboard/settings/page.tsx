import Settings from '@/components/ui/settings/settings';
import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Settings
      </Typography>
      <Settings />
    </>
  );
}

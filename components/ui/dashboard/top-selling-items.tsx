import { topSellingItems } from '@/data/dashboard/recent-orders';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { lusitana } from '@/app/fonts';

export default function TopSellingItems() {
  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Typography variant="h6" component="h6">
            Top Selling Items
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            Last 7-days activity
          </Typography>
        }
      />
      <CardContent sx={{ pt: 0 }}>
        <TableContainer component={Paper}>
          <Table aria-label="top selling items table">
            <TableBody>
              {topSellingItems.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    sx={{ textWrap: 'nowrap' }}
                    component="th"
                    scope="row"
                  >
                    {item.name}
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2" color="text.secondary">
                      {item.quantitySold}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ textWrap: 'nowrap' }} align="right">
                    <Typography fontFamily={lusitana.style.fontFamily}>
                      Rs {item.totalRevenue.toLocaleString()}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

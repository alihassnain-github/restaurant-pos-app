import { recentOrders } from "@/data/dashboard/recent-orders";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { lusitana } from "@/app/fonts";
import Button from "@mui/material/Button";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Paid":
      return "success";
    case "Preparing":
      return "warning";
    case "Pending":
      return "info";
    case "Cancelled":
      return "error";
    default:
      return "default";
  }
};

export default function RecentOrders() {
  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Typography variant="h6" component="h6">
            Recent Orders
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            Today's activity
          </Typography>
        }
        action={
          <NextLink href="/dashboard/orders">
            <Button size="small">View All</Button>
          </NextLink>
        }
      />
      <CardContent sx={{ pt: 0 }}>
        <TableContainer component={Paper}>
          <Table aria-label="top selling items table">
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow
                  key={order.orderId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{ textWrap: "nowrap" }}
                    component="th"
                    scope="row"
                  >
                    {order.orderId}
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2" color="text.secondary">
                      {order.tableNumber}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Chip
                      label={order.status}
                      color={getStatusColor(order.status) as any}
                      size="small"
                      sx={{ minWidth: 80 }}
                    />
                  </TableCell>
                  <TableCell sx={{ textWrap: "nowrap" }} align="right">
                    <Typography fontFamily={lusitana.style.fontFamily}>
                      Rs {order.totalAmount.toLocaleString()}
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

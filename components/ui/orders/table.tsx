import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatDate } from "@/app/lib/utils";
import StatusChip from "@/components/status-chip";
import PaymentMethodChip from "@/components/payment-chip";
import OrderDetailsDrawer from "./order-details-drawer";

type Order = {
  orderId: string;
  tableNumber: number;
  totalItems: number;
  totalAmount: number;
  status: "pending" | "preparing" | "ready" | "paid" | "cancelled";
  createdAt: Date;
  paymentMethod: "cash" | "card";
};

export const orders: Order[] = [
  {
    orderId: "1001",
    tableNumber: 1,
    totalItems: 3,
    totalAmount: 1250,
    status: "pending",
    createdAt: new Date("2025-12-18T08:10:00Z"),
    paymentMethod: "cash",
  },
  {
    orderId: "1002",
    tableNumber: 2,
    totalItems: 5,
    totalAmount: 2450,
    status: "preparing",
    createdAt: new Date("2025-12-18T08:20:00Z"),
    paymentMethod: "card",
  },
  {
    orderId: "1003",
    tableNumber: 3,
    totalItems: 2,
    totalAmount: 850,
    status: "ready",
    createdAt: new Date("2025-12-18T08:30:00Z"),
    paymentMethod: "cash",
  },
  {
    orderId: "1004",
    tableNumber: 4,
    totalItems: 6,
    totalAmount: 3200,
    status: "paid",
    createdAt: new Date("2025-12-18T08:35:00Z"),
    paymentMethod: "card",
  },
  {
    orderId: "1005",
    tableNumber: 5,
    totalItems: 4,
    totalAmount: 1600,
    status: "cancelled",
    createdAt: new Date("2025-12-18T08:40:00Z"),
    paymentMethod: "cash",
  },
  {
    orderId: "1006",
    tableNumber: 6,
    totalItems: 7,
    totalAmount: 4100,
    status: "paid",
    createdAt: new Date("2025-12-18T09:00:00Z"),
    paymentMethod: "card",
  },
  {
    orderId: "1007",
    tableNumber: 7,
    totalItems: 3,
    totalAmount: 1350,
    status: "ready",
    createdAt: new Date("2025-12-18T09:05:00Z"),
    paymentMethod: "cash",
  },
  {
    orderId: "1008",
    tableNumber: 8,
    totalItems: 8,
    totalAmount: 4600,
    status: "preparing",
    createdAt: new Date("2025-12-18T09:10:00Z"),
    paymentMethod: "card",
  },
  {
    orderId: "1009",
    tableNumber: 9,
    totalItems: 1,
    totalAmount: 450,
    status: "paid",
    createdAt: new Date("2025-12-18T09:15:00Z"),
    paymentMethod: "cash",
  },
  {
    orderId: "1010",
    tableNumber: 10,
    totalItems: 5,
    totalAmount: 2300,
    status: "pending",
    createdAt: new Date("2025-12-18T09:20:00Z"),
    paymentMethod: "card",
  },
];

export default function OrdersTable() {
  return (
    <TableContainer
      component={Paper}
    >
      <Table stickyHeader aria-label="orders table" sx={{ textWrap: "nowrap" }}>
        <TableHead sx={{ backgroundColor: "action.selected" }}>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell align="right">Table Number</TableCell>
            <TableCell align="right">Total Items</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell>Order Status</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(
            ({
              orderId,
              tableNumber,
              totalItems,
              totalAmount,
              status,
              paymentMethod,
              createdAt,
            }) => (
              <TableRow
                hover
                key={orderId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {orderId}
                </TableCell>
                <TableCell align="right">{tableNumber}</TableCell>
                <TableCell align="right">{totalItems}</TableCell>
                <TableCell align="right">
                  {totalAmount.toLocaleString()}
                </TableCell>
                <TableCell>
                  <StatusChip status={status} />
                </TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
                <TableCell>
                  <PaymentMethodChip method={paymentMethod} />
                </TableCell>
                <TableCell>
                  <OrderDetailsDrawer />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

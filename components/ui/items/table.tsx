"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { formatDate } from "@/app/lib/utils";
import { DeleteItem, EditItem } from "./buttons";
import { useState } from "react";
import DeleteModal from "./delete-modal";
import CategoryStatusChip from "../categories/status-chip";

type Item = {
  itemId: string;
  name: string;
  category: string;
  price: number | null;
  status: "active" | "inactive";
  variants: number | null;
  createdAt: Date;
};

export const items: Item[] = [
  {
    itemId: "ITM-001",
    name: "Margherita Pizza",
    category: "Main Course",
    price: 850,
    status: "active",
    variants: 3,
    createdAt: new Date("2024-12-01T10:00:00"),
  },
  {
    itemId: "ITM-002",
    name: "Caesar Salad",
    category: "Appetizers",
    price: 450,
    status: "active",
    variants: null,
    createdAt: new Date("2024-12-01T10:15:00"),
  },
  {
    itemId: "ITM-003",
    name: "Chicken Biryani",
    category: "Main Course",
    price: null,
    status: "active",
    variants: 4,
    createdAt: new Date("2024-12-02T09:30:00"),
  },
  {
    itemId: "ITM-004",
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: 380,
    status: "active",
    variants: null,
    createdAt: new Date("2024-12-02T11:45:00"),
  },
  {
    itemId: "ITM-005",
    name: "Fresh Orange Juice",
    category: "Beverages",
    price: null,
    status: "active",
    variants: 2,
    createdAt: new Date("2024-12-03T08:20:00"),
  },
  {
    itemId: "ITM-006",
    name: "Garlic Bread",
    category: "Appetizers",
    price: 250,
    status: "inactive",
    variants: null,
    createdAt: new Date("2024-12-03T14:30:00"),
  },
  {
    itemId: "ITM-007",
    name: "Beef Burger",
    category: "Main Course",
    price: null,
    status: "active",
    variants: 5,
    createdAt: new Date("2024-12-04T12:00:00"),
  },
  {
    itemId: "ITM-008",
    name: "Tiramisu",
    category: "Desserts",
    price: 420,
    status: "active",
    variants: null,
    createdAt: new Date("2024-12-04T15:10:00"),
  },
  {
    itemId: "ITM-009",
    name: "Iced Latte",
    category: "Beverages",
    price: null,
    status: "active",
    variants: 3,
    createdAt: new Date("2024-12-05T09:45:00"),
  },
  {
    itemId: "ITM-010",
    name: "Spring Rolls",
    category: "Appetizers",
    price: 320,
    status: "inactive",
    variants: null,
    createdAt: new Date("2024-12-05T16:20:00"),
  },
];

export default function ItemsTable() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          stickyHeader
          aria-label="orders table"
          sx={{ textWrap: "nowrap" }}
        >
          <TableHead sx={{ backgroundColor: "action.selected" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Variants</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(
              ({
                itemId,
                category,
                name,
                price,
                variants,
                status,
                createdAt,
              }) => (
                <TableRow
                  hover
                  key={itemId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell>{category}</TableCell>
                  <TableCell align="right">{price ? price : "-"}</TableCell>
                  <TableCell align="right">
                    {variants ? variants : "-"}
                  </TableCell>
                  <TableCell>
                    <CategoryStatusChip status={status} />
                  </TableCell>
                  <TableCell>{formatDate(createdAt)}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <EditItem />
                      <DeleteItem handleOpen={handleOpen} />
                    </Stack>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteModal open={open} handleClose={handleClose} />
    </>
  );
}

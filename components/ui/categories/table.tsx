"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { formatDate } from "@/app/lib/utils";
import { useState } from "react";
import CategoryStatusChip from "./status-chip";
import { DeleteCategory, EditCategory } from "./buttons";
import DeleteModal from "./delete-modal";

type Category = {
    id: string;
    name: string;
    description: string;
    totalItems: number;
    status: "active" | "inactive";
    createdAt: Date;
};

export const categories: Category[] = [
    {
        id: "1",
        name: "Appetizers",
        description: "Light dishes served before the main course",
        totalItems: 12,
        status: "active",
        createdAt: new Date("2024-12-01T10:00:00"),
    },
    {
        id: "2",
        name: "Main Course",
        description: "Hearty main dishes and entrees",
        totalItems: 24,
        status: "active",
        createdAt: new Date("2024-12-01T10:05:00"),
    },
    {
        id: "3",
        name: "Desserts",
        description: "Sweet treats and after-dinner delights",
        totalItems: 15,
        status: "active",
        createdAt: new Date("2024-12-01T11:00:00"),
    },
    {
        id: "4",
        name: "Beverages",
        description: "Hot and cold drinks",
        totalItems: 18,
        status: "active",
        createdAt: new Date("2024-12-02T09:30:00"),
    },
    {
        id: "5",
        name: "Salads",
        description: "Fresh and healthy salad options",
        totalItems: 8,
        status: "inactive",
        createdAt: new Date("2024-12-02T10:15:00"),
    },
    {
        id: "6",
        name: "Soups",
        description: "Warm and comforting soup selections",
        totalItems: 6,
        status: "active",
        createdAt: new Date("2024-12-03T12:00:00"),
    },
    {
        id: "7",
        name: "Pasta",
        description: "Italian pasta dishes and specialties",
        totalItems: 10,
        status: "active",
        createdAt: new Date("2024-12-03T13:30:00"),
    },
    {
        id: "8",
        name: "Seafood",
        description: "Fresh fish and seafood preparations",
        totalItems: 14,
        status: "active",
        createdAt: new Date("2024-12-04T15:00:00"),
    },
    {
        id: "9",
        name: "Vegetarian",
        description: "Plant-based dishes and options",
        totalItems: 11,
        status: "active",
        createdAt: new Date("2024-12-04T16:20:00"),
    },
    {
        id: "10",
        name: "Seasonal Specials",
        description: "Limited time seasonal offerings",
        totalItems: 5,
        status: "inactive",
        createdAt: new Date("2024-12-05T18:00:00"),
    },
];

export default function CategoriesTable() {
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
                            <TableCell>Category Name</TableCell>
                            <TableCell align="right">Total Items</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map(
                            ({ id, name, totalItems, description, status, createdAt }) => (
                                <TableRow
                                    hover
                                    key={id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {name}
                                    </TableCell>
                                    <TableCell align="right">{totalItems}</TableCell>
                                    <TableCell title={description}>
                                        <Typography variant="body2" sx={{ maxWidth: 250, textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }} color="text.secondary">
                                            {description}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <CategoryStatusChip status={status} />
                                    </TableCell>
                                    <TableCell>{formatDate(createdAt)}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <EditCategory />
                                            <DeleteCategory handleOpen={handleOpen} />
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

"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const columns: GridColDef[] = [
    { field: "orderId", headerName: "Order ID", },
    { field: "tableNumber", headerName: "Table Number", minWidth: 120 },
    { field: "totalItems", headerName: "Total Items" },
    { field: "totalAmount", headerName: "Total Amount", minWidth: 120 },
    { field: "orderStatus", headerName: "Order Status", minWidth: 120 },
    { field: "createdAt", headerName: "Created At" },
    { field: "paidAt", headerName: "Paid At" },
    { field: "paymentMethod", headerName: "Payment Method", minWidth: 150 },
    { field: "Action", headerName: "Action" },
];

const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
    return (
        <Paper sx={{ width: "100%" }}>
            <Card variant="outlined" sx={{ p: 3, width: "100%" }}>
                <SimpleBar style={{
                    overflowX: "auto", overflowY: "auto", height: "400px"
                }}>
                    < DataGrid
                        density="standard"
                        disableColumnResize={true}
                        disableColumnFilter={true}
                        rows={rows}
                        columns={columns}
                        hideFooter
                        checkboxSelection
                        sx={{
                            border: 0,
                            "& .MuiDataGrid-columnHeader": {
                                backgroundColor: "action.hover",
                            }
                        }}
                    />
                </SimpleBar>
            </Card>
        </Paper >
    );
}

"use client";

import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Drawer from "@mui/material/Drawer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import OrderStatusChip from "@/components/status-chip";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import PaymentMethodChip from "@/components/payment-chip";
import SimpleBar from "simplebar-react";
import ItemCard from "./item-card";

export const OrderItems = [
    {
        title: "Premium Wireless Headphones",
        quantity: 1,
        price: "$299.00",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300"
    },
    {
        title: "Minimalist Leather Watch",
        quantity: 2,
        price: "$145.00",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300"
    },
    {
        title: "Smart Fitness Tracker",
        quantity: 1,
        price: "$89.50",
        image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=300"
    },
    {
        title: "Ergonomic Mechanical Keyboard",
        quantity: 1,
        price: "$120.00",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=300"
    },
    {
        title: "Designer Polarized Sunglasses",
        quantity: 1,
        price: "$180.00",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=300"
    },
    {
        title: "Portable Bluetooth Speaker",
        quantity: 3,
        price: "$55.00",
        image: "https://images.unsplash.com/photo-1608156639585-b3a034ef9199?auto=format&fit=crop&q=80&w=300"
    }
];

export default function OrderDetailsDrawer() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <Tooltip placement="top" title="View order details">
                <IconButton
                    onClick={toggleDrawer(true)}
                    aria-label="View order details"
                >
                    <VisibilityOutlinedIcon fontSize="small" />
                </IconButton>
            </Tooltip>
            <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ p: 3 }}>
                    <Box component="div" sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                        <Box component="div">
                            <Typography variant="h5" component="h5">
                                Order Information
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ fontWeight: "medium" }} component="span">
                                # 1001
                            </Typography>
                        </Box>
                        <OrderStatusChip status="ready" />
                    </Box>
                    <Divider component="div" sx={{ my: 2 }} />
                    <Box component="div" sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        <Box component="div" sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Typography variant="body2" sx={{ fontWeight: "medium" }} component="strong">
                                Table Number:
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="strong">
                                12
                            </Typography>
                        </Box>
                        <Box component="div" sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Typography variant="body2" sx={{ fontWeight: "medium" }} component="strong">
                                Created By:
                            </Typography>
                            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{ width: 24, height: 24 }}
                                />
                                <NextLink href={""}>
                                    <Link underline="hover">
                                        Ali Raza
                                    </Link>
                                </NextLink>
                            </Box>
                        </Box>
                        <Box component="div" sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Typography variant="body2" sx={{ fontWeight: "medium" }} component="strong">
                                Order Created At:
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="strong">
                                18 Dec 2025, 02:45 PM
                            </Typography>
                        </Box>
                    </Box>
                    <Divider component="div" sx={{ my: 2 }} />
                    <Box component="div" sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        <Box component="div" sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Typography variant="body2" sx={{ fontWeight: "medium" }} component="strong">
                                Total Items:
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="strong">
                                06
                            </Typography>
                        </Box>
                        <Box component="div" sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Typography variant="body2" sx={{ fontWeight: "medium" }} component="strong">
                                Notes:
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="strong">
                                Extra spices, more cheese and crispy.
                            </Typography>
                        </Box>
                    </Box>
                    <Divider component="div" sx={{ my: 2 }} />
                    <Typography variant="h6" component="h6">
                        Order Items
                    </Typography>
                    <SimpleBar style={{ overflowX: "auto" }}>
                        {OrderItems.map((item, index) => (
                            <ItemCard key={index} title={item.title} price={item.price} image={item.image} quantity={item.quantity} />
                        ))}
                    </SimpleBar>
                    <Divider component="div" sx={{ my: 2 }} />
                    <Typography variant="h6" component="h6">
                        Payment Details
                    </Typography>
                    <Box component="div" sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        <Box component="div" sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Typography variant="body2" sx={{ fontWeight: "medium" }} component="strong">
                                Total Amount:
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="strong">
                                1,200
                            </Typography>
                        </Box>
                        <Box component="div" sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Typography variant="body2" sx={{ fontWeight: "medium" }} component="strong">
                                Payment Method:
                            </Typography>
                            <PaymentMethodChip method="cash" />
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </div>
    );
}

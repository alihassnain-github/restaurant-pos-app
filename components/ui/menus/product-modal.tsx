"use client";

import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

export const categories = [
    { id: "cat-1", name: "Fast Food" },
    { id: "cat-2", name: "Beverages" },
    { id: "cat-3", name: "Desserts" },
    { id: "cat-4", name: "Main Course" },
];

export const items = [
    // 1. Single price item (no variants)
    {
        id: "item-1",
        name: "French Fries",
        category_id: "cat-1",
        status: "active",
        unit: "none",
        image: null,
        price: 220,
        variants: [],
    },

    // 2. Named variants
    {
        id: "item-2",
        name: "Classic Burger",
        category_id: "cat-1",
        status: "active",
        unit: "none",
        image: null,
        variants: [
            {
                id: "var-1",
                name: "Small",
                quantity: null,
                price: 350,
                status: "active",
            },
            {
                id: "var-2",
                name: "Medium",
                quantity: null,
                price: 450,
                status: "active",
            },
            {
                id: "var-3",
                name: "Large",
                quantity: null,
                price: 550,
                status: "active",
            },
        ],
    },

    // 3. Quantity-based variants (ml)
    {
        id: "item-3",
        name: "Fresh Lime Drink",
        category_id: "cat-2",
        status: "active",
        unit: "ml",
        image: null,
        variants: [
            {
                id: "var-4",
                name: null,
                quantity: 250,
                price: 180,
                status: "active",
            },
            {
                id: "var-5",
                name: null,
                quantity: 500,
                price: 300,
                status: "active",
            },
        ],
    },

    // 4. Single price beverage
    {
        id: "item-4",
        name: "Cola Can",
        category_id: "cat-2",
        status: "active",
        unit: "none",
        image: null,
        price: 120,
        variants: [],
    },

    // 5. Dessert with variants
    {
        id: "item-5",
        name: "Ice Cream Sundae",
        category_id: "cat-3",
        status: "active",
        unit: "none",
        image: null,
        variants: [
            {
                id: "var-6",
                name: "Vanilla",
                quantity: null,
                price: 250,
                status: "active",
            },
            {
                id: "var-7",
                name: "Chocolate",
                quantity: null,
                price: 270,
                status: "active",
            },
        ],
    },

    // 6. Main course (single price)
    {
        id: "item-6",
        name: "Grilled Chicken",
        category_id: "cat-4",
        status: "active",
        unit: "none",
        image: null,
        price: 950,
        variants: [],
    },

    // 7. Quantity-based food (grams)
    {
        id: "item-7",
        name: "Chicken Wings",
        category_id: "cat-1",
        status: "active",
        unit: "g",
        image: null,
        variants: [
            {
                id: "var-8",
                name: null,
                quantity: 250,
                price: 420,
                status: "active",
            },
            {
                id: "var-9",
                name: null,
                quantity: 500,
                price: 780,
                status: "active",
            },
        ],
    },

    // 8. Beverage with size variants
    {
        id: "item-8",
        name: "Milkshake",
        category_id: "cat-2",
        status: "active",
        unit: "ml",
        image: null,
        variants: [
            {
                id: "var-10",
                name: null,
                quantity: 300,
                price: 280,
                status: "active",
            },
            {
                id: "var-11",
                name: null,
                quantity: 500,
                price: 420,
                status: "active",
            },
        ],
    },

    // 9. Dessert (single price)
    {
        id: "item-9",
        name: "Chocolate Brownie",
        category_id: "cat-3",
        status: "inactive",
        unit: "none",
        image: null,
        price: 300,
        variants: [],
    },

    // 10. Fast food with variants
    {
        id: "item-10",
        name: "Zinger Burger",
        category_id: "cat-1",
        status: "active",
        unit: "none",
        image: null,
        variants: [
            {
                id: "var-12",
                name: "Regular",
                quantity: null,
                price: 520,
                status: "active",
            },
            {
                id: "var-13",
                name: "Double Patty",
                quantity: null,
                price: 680,
                status: "active",
            },
        ],
    },
];

export default function ProductModal() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                onClick={handleOpen}
                variant="outlined"
                size="small"
                color="info"
                startIcon={<AddIcon />}
            >
                Add Items
            </Button>
            <div>
                Modal
            </div>
        </>
    )
}
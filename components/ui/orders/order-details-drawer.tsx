"use client";

import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ItemCard from "./item-card";
import CloseIcon from "@mui/icons-material/Close";
import NextLink from "@/components/next-link";
import { StatusChip } from "@/components/status-chip";

export const OrderItems = [
  {
    title: "Chicken Biryani",
    quantity: 1,
    unit: "plate",
    price: 450,
    image: null,
  },
  {
    title: "Zinger Burger",
    quantity: 2,
    unit: "item",
    price: 520,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=300",
  },
  {
    title: "Chicken Karahi (Half)",
    quantity: 1,
    unit: "half",
    price: 1250,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=300",
  },
  {
    title: "Garlic Naan",
    quantity: 4,
    unit: "piece",
    price: 80,
    image: null,
  },
  {
    title: "Mint Margarita",
    quantity: 2,
    unit: "glass",
    price: 220,
    image: null,
  },
  {
    title: "Kheer",
    quantity: 1,
    unit: "bowl",
    price: 180,
    image: null,
  },
];

interface OrderDetailsDrawerProps {
  open: boolean;
  handleClose: () => void;
}

export default function OrderDetailsDrawer({
  open,
  handleClose,
}: OrderDetailsDrawerProps) {
  return (
    <Drawer anchor="bottom" open={open} onClose={handleClose}>
      <Box sx={{ p: 3 }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "start", gap: 2 }}
          >
            <Box component="div">
              <Typography variant="h5" component="h5">
                Order Information
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontWeight: "medium" }}
                component="span"
              >
                # 1001
              </Typography>
            </Box>
            <StatusChip status="ready" />
          </Box>
          <Tooltip placement="top" title="Close">
            <IconButton onClick={handleClose} aria-label="Close order details">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <Divider component="div" sx={{ my: 2 }} />
        <Box component="div" sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "medium" }}
              component="strong"
            >
              Table Number:
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="strong"
            >
              12
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "medium" }}
              component="strong"
            >
              Created By:
            </Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Avatar
                alt="Ali Raza"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=40&w=40"
                sx={{ width: 28, height: 28 }}
              />
              <NextLink
                className="text-blue-500 text-sm"
                prefetch={false}
                href={""}
              >
                Ali Raza
              </NextLink>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "medium" }}
              component="strong"
            >
              Order Created At:
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="strong"
            >
              18 Dec 2025, 02:45 PM
            </Typography>
          </Box>
        </Box>
        <Divider component="div" sx={{ my: 2 }} />
        <Box component="div" sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "medium" }}
              component="strong"
            >
              Total Items:
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="strong"
            >
              06
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "medium" }}
              component="strong"
            >
              Notes:
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="strong"
            >
              Extra spices, more cheese and crispy.
            </Typography>
          </Box>
        </Box>
        <Divider component="div" sx={{ my: 2 }} />
        <Typography variant="h6" component="h6">
          Order Items
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 1,
            px: 1,
            pt: 1,
            pb: 1,
            overflowX: "auto",
            scrollbarWidth: "thin",
          }}
        >
          {OrderItems.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
            />
          ))}
        </Box>
        <Divider component="div" sx={{ mt: 1, mb: 2 }} />
        <Typography variant="h6" component="h6">
          Payment Details
        </Typography>
        <Box component="div" sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "medium" }}
              component="strong"
            >
              Total Amount:
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="strong"
            >
              1,200
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "medium" }}
              component="strong"
            >
              Payment Method:
            </Typography>
            <StatusChip status="cash" />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

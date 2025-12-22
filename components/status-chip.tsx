import Chip from "@mui/material/Chip";
import { ChipProps } from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import PaidIcon from "@mui/icons-material/Paid";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PaymentsIcon from "@mui/icons-material/Payments";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

/**
 * Central registry for all chip states
 */
const STATUS_CONFIG = {
  /* Order status */
  pending: {
    label: "Pending",
    icon: HourglassBottomIcon,
    color: "default",
  },
  preparing: {
    label: "Preparing",
    icon: AutorenewIcon,
    color: "info",
  },
  ready: {
    label: "Ready",
    icon: CheckCircleIcon,
    color: "primary",
  },
  paid: {
    label: "Paid",
    icon: PaidIcon,
    color: "success",
  },
  cancelled: {
    label: "Cancelled",
    icon: CancelIcon,
    color: "error",
  },

  /* Payment methods */
  cash: {
    label: "Cash",
    icon: PaymentsIcon,
    color: "default",
  },
  card: {
    label: "Card",
    icon: CreditCardIcon,
    color: "primary",
  },
  wallet: {
    label: "Wallet",
    icon: AccountBalanceWalletIcon,
    color: "success",
  },

  /* Active / inactive */
  active: {
    label: "Active",
    icon: CheckCircleIcon,
    color: "success",
  },
  inactive: {
    label: "Inactive",
    icon: CancelIcon,
    color: "default",
  },

  /* Table status */
  available: {
    label: "Available",
    icon: CheckCircleOutlineIcon,
    color: "success",
  },
  occupied: {
    label: "Occupied",
    icon: EventSeatIcon,
    color: "error",
  },
} as const;

type StatusKey = keyof typeof STATUS_CONFIG;

interface StatusChipProps {
  status: StatusKey;
  size?: ChipProps["size"];
}

export function StatusChip({ status, size = "small" }: StatusChipProps) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <Chip
      size={size}
      color={config.color}
      icon={<Icon fontSize="small" />}
      label={config.label}
    />
  );
}

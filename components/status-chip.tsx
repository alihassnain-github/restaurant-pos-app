import Chip from "@mui/material/Chip";
import PaidIcon from "@mui/icons-material/Paid";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

interface StatusChipProps {
  status: "pending" | "preparing" | "ready" | "paid" | "cancelled";
}

const iconMap = {
  pending: HourglassBottomIcon,
  preparing: AutorenewIcon,
  ready: CheckCircleIcon,
  paid: PaidIcon,
  cancelled: CancelIcon,
};

const colorMap = {
  pending: "default",
  preparing: "info",
  ready: "primary",
  paid: "success",
  cancelled: "error",
} as const;

export default function OrderStatusChip({ status }: StatusChipProps) {
  const Icon = iconMap[status];
  const color = colorMap[status];

  return (
    <Chip
      size="small"
      color={color}
      icon={<Icon fontSize="small" />}
      label={status}
    />
  );
}

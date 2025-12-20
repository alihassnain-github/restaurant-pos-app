import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EventSeatIcon from "@mui/icons-material/EventSeat";

interface StatusChipProps {
  status: "available" | "occupied";
}

const iconMap = {
  available: CheckCircleOutlineIcon,
  occupied: EventSeatIcon,
};

const colorMap = {
  available: "success",
  occupied: "error",
} as const;

export default function TableStatusChip({ status }: StatusChipProps) {
  const Icon = iconMap[status];

  return (
    <Chip
      size="small"
      color={colorMap[status]}
      icon={<Icon fontSize="small" />}
      label={status.charAt(0).toUpperCase() + status.slice(1)}
    />
  );
}

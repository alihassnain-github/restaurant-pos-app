import Chip from "@mui/material/Chip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

interface StatusChipProps {
  status: "active" | "inactive";
}

const iconMap = {
  active: CheckCircleIcon,
  inactive: CancelIcon,
};

const colorMap = {
  active: "success",
  inactive: "default",
} as const;

export default function CategoryStatusChip({ status }: StatusChipProps) {
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

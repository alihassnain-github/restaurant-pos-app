import Chip from "@mui/material/Chip";
import PaymentsIcon from "@mui/icons-material/Payments";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

interface PaymentMethodChipProps {
  method: "cash" | "card" | "wallet";
}

const iconMap = {
  cash: PaymentsIcon,
  card: CreditCardIcon,
  wallet: AccountBalanceWalletIcon,
};

const colorMap = {
  cash: "default",
  card: "primary",
  wallet: "success",
} as const;

export default function PaymentMethodChip({ method }: PaymentMethodChipProps) {
  const Icon = iconMap[method];
  const color = colorMap[method];

  return (
    <Chip
      size="small"
      color={color}
      icon={<Icon fontSize="small" />}
      label={method}
    />
  );
}

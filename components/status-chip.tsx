import Chip from '@mui/material/Chip';
import { ChipProps } from '@mui/material/Chip';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmber from '@mui/icons-material/WarningAmber';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import PaidIcon from '@mui/icons-material/Paid';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

/**
 * Central registry for all chip states
 */
const STATUS_CONFIG = {
  /* Order status */
  pending: {
    label: 'Pending',
    icon: HourglassBottomIcon,
    color: 'default',
  },
  preparing: {
    label: 'Preparing',
    icon: AutorenewIcon,
    color: 'info',
  },
  ready: {
    label: 'Ready',
    icon: CheckCircleIcon,
    color: 'primary',
  },
  paid: {
    label: 'Paid',
    icon: PaidIcon,
    color: 'success',
  },
  cancelled: {
    label: 'Cancelled',
    icon: CancelIcon,
    color: 'error',
  },

  /* Payment methods */
  cash: {
    label: 'Cash',
    icon: PaymentsIcon,
    color: 'default',
  },
  card: {
    label: 'Card',
    icon: CreditCardIcon,
    color: 'primary',
  },
  wallet: {
    label: 'Wallet',
    icon: AccountBalanceWalletIcon,
    color: 'success',
  },

  /* Active / inactive */
  active: {
    label: 'Active',
    icon: CheckCircleIcon,
    color: 'success',
  },
  inactive: {
    label: 'Inactive',
    icon: CancelIcon,
    color: 'default',
  },

  /* Table status */
  available: {
    label: 'Available',
    icon: CheckCircleOutlineIcon,
    color: 'success',
  },
  occupied: {
    label: 'Occupied',
    icon: EventSeatIcon,
    color: 'error',
  },

  /* Low stock status */
  low: {
    label: 'Low Stock',
    icon: WarningAmber,
    color: 'warning',
  },
  critical: {
    label: 'Critical Stock',
    icon: ErrorOutlineIcon,
    color: 'error',
  },

  /* stock status */
  in: {
    label: 'Stock In',
    icon: ArrowUpwardIcon,
    color: 'success',
  },
  out: {
    label: 'Stock Out',
    icon: ArrowDownwardIcon,
    color: 'error',
  },

  ok: {
    label: 'Stock OK',
    icon: CheckCircleOutlineIcon,
    color: 'default',
  },
} as const;

type StatusKey = keyof typeof STATUS_CONFIG;

interface StatusChipProps {
  status: StatusKey;
  size?: ChipProps['size'];
}

export function StatusChip({ status, size = 'small' }: StatusChipProps) {
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

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { NotificationsNone } from '@mui/icons-material';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function NotificationsMenu() {
    return (
        <IconButton color="inherit" aria-label="notifications">
            <NotificationsNone fontSize="small" />
            <CartBadge badgeContent={2} overlap="circular" />
        </IconButton>
    );
}

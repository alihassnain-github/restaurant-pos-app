import {
  Dashboard,
  Restaurant,
  ReceiptLong,
  TableRestaurant,
  Kitchen,
  Print,
  Inventory,
  Category,
  ShoppingCart,
  People,
  Assessment,
  Settings,
  MoneyOff,
} from '@mui/icons-material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: Dashboard },

  // Order Module
  { name: 'Orders', href: '/dashboard/orders', icon: ReceiptLong },

  // Table Management
  { name: 'Tables', href: '/dashboard/tables', icon: TableRestaurant },

  // Kitchen
  { name: 'Kitchen Display', href: '/dashboard/kds', icon: Kitchen },

  // Billing
  { name: 'Billing', href: '/dashboard/billing', icon: ReceiptLong },

  // Menu & Items
  { name: 'Items', href: '/dashboard/items', icon: ShoppingCart },
  { name: 'Categories', href: '/dashboard/categories', icon: Category },
  { name: 'Menus', href: '/dashboard/menus', icon: Restaurant },

  // Inventory / Grocery
  { name: 'Inventory', href: '/dashboard/inventory', icon: Inventory },

  // Expenses
  { name: 'Expenses', href: '/dashboard/expenses', icon: MoneyOff },

  // Users & Roles
  { name: 'Users', href: '/dashboard/users', icon: People },
  { name: 'Roles', href: '/dashboard/roles', icon: People },

  // Reports
  { name: 'Reports', href: '/dashboard/reports', icon: Assessment },

  // Printers
  { name: 'Printers', href: '/dashboard/printers', icon: Print },

  // Settings
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItemButton>
            <ListItemIcon>
              <link.icon />
            </ListItemIcon>
            <ListItemText primary={link.name} />
          </ListItemButton>
        </Link>
      ))}
    </>
  );
}

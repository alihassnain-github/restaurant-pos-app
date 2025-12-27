'use client';

import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

export function AddStock() {
  return (
    <Link href={'/dashboard/inventory/stock-in/create'}>
      <Button variant="contained" size="small">
        Add Stock
      </Button>
    </Link>
  );
}

export function CreateItem() {
  return (
    <Link href={'/dashboard/inventory/items/create'}>
      <Button variant="contained" size="small">
        Create Item
      </Button>
    </Link>
  );
}

export function EditItem() {
  return (
    <Link href={'/dashboard/inventory/items/1/edit'}>
      <IconButton size="medium" aria-label="edit" color="primary">
        <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
      </IconButton>
    </Link>
  );
}

interface DeleteItemProps {
  handleOpen: () => void;
}

export function DeleteItem({ handleOpen }: DeleteItemProps) {
  return (
    <IconButton
      size="medium"
      onClick={handleOpen}
      aria-label="delete"
      color="error"
    >
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
}
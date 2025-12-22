"use client";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

export function CreateMenu() {
  return (
    <Link href={"/dashboard/menus/create"}>
      <Button variant="contained" size="small">
        Create Menu
      </Button>
    </Link>
  );
}

export function EditMenu() {
  return (
    <Link href={"/dashboard/menus/1/edit"}>
      <IconButton size="medium" aria-label="edit" color="primary">
        <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
      </IconButton>
    </Link>
  );
}

interface DeleteMenuProps {
  handleOpen: () => void;
}

export function DeleteMenu({ handleOpen }: DeleteMenuProps) {
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

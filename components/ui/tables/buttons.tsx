"use client";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

export function CreateTable() {
  return (
    <Link href={"/dashboard/tables/create"}>
      <Button variant="contained" size="small">Create Table</Button>
    </Link>
  );
}

export function EditTable() {
  return (
    <Link href={"/dashboard/tables/1/edit"}>
      <IconButton size="medium" aria-label="edit" color="primary">
        <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
      </IconButton>
    </Link>
  );
}

interface DeleteTableProps {
  handleOpen: () => void;
}

export function DeleteTable({ handleOpen }: DeleteTableProps) {
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

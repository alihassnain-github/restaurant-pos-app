"use client";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

export function CreateCategory() {
    return (
        <Link href={"/dashboard/categories/create"}>
            <Button variant="contained" size="small">Create Category</Button>
        </Link>
    );
}

export function EditCategory() {
    return (
        <Link href={"/dashboard/categories/1/edit"}>
            <IconButton size="medium" aria-label="edit" color="primary">
                <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
            </IconButton>
        </Link>
    );
}

interface DeleteCategoryProps {
    handleOpen: () => void;
}

export function DeleteCategory({ handleOpen }: DeleteCategoryProps) {
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

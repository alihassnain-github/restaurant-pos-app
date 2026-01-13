import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

export function AddSupplier() {
    return (
        <Link href={'/dashboard/supplier/add'}>
            <Button variant="contained" size="small">
                Add Supplier
            </Button>
        </Link>
    );
}

export function EditSupplier() {
    return (
        <Link href={'/dashboard/supplier/1/edit'}>
            <IconButton size="medium" aria-label="edit" color="primary">
                <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
            </IconButton>
        </Link>
    );
}

interface DeleteSupplierProps {
    handleOpen: () => void;
}

export function DeleteSupplier({ handleOpen }: DeleteSupplierProps) {
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
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

export function AddRole() {
    return (
        <Link href={'/dashboard/roles/add'}>
            <Button variant="contained" size="small">
                Add Role
            </Button>
        </Link>
    );
}

export function EditRole() {
    return (
        <Link href={'/dashboard/roles/1/edit'}>
            <IconButton size="medium" aria-label="edit" color="primary">
                <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
            </IconButton>
        </Link>
    );
}

interface DeleteRoleProps {
    handleOpen: () => void;
}

export function DeleteRole({ handleOpen }: DeleteRoleProps) {
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
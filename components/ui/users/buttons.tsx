import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

export function CreateUser() {
    return (
        <Link href={'/dashboard/users/create'}>
            <Button variant="contained" size="small">
                Create User
            </Button>
        </Link>
    );
}

export function EditUser() {
    return (
        <Link href={'/dashboard/users/1/edit'}>
            <IconButton size="medium" aria-label="edit" color="primary">
                <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
            </IconButton>
        </Link>
    );
}

interface DeleteUserProps {
    handleOpen: () => void;
}

export function DeleteUser({ handleOpen }: DeleteUserProps) {
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
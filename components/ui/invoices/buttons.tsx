'use client';

import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

export function CreateInvoice() {
    return (
        <Link href={'/dashboard/invoices/create'}>
            <Button variant="contained" size="small">
                Create Invoice
            </Button>
        </Link>
    );
}

export function EditInvoice() {
    return (
        <Link href={'/dashboard/invoices/1/edit'}>
            <IconButton size="medium" aria-label="edit" color="primary">
                <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
            </IconButton>
        </Link>
    );
}

interface DeleteInvoiceProps {
    handleOpen: () => void;
}

export function DeleteInvoice({ handleOpen }: DeleteInvoiceProps) {
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

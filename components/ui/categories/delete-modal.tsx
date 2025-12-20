"use client";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface DeleteModalProps {
    open: boolean;
    handleClose: () => void;
}

export default function DeleteModal({ open, handleClose }: DeleteModalProps) {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: 400,
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 3,
                }}
            >
                <Typography variant="h6" mb={1}>
                    Delete Category
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={3}>
                    Are you sure you want to delete category with name <strong>Beverages</strong>?
                    This action cannot be undone.
                </Typography>

                <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Button
                        size="small"
                        variant="contained"
                        color="inherit"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>

                    <Button size="small" variant="contained" color="error">
                        Delete
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
}

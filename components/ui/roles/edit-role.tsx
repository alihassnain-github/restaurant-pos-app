'use client';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Checkbox, Divider, FormControlLabel, Typography } from '@mui/material';

const permissionGroups = [
    {
        category: 'Orders & Sales',
        permissions: ['View Orders', 'Create Orders', 'Modify Orders', 'Process Refunds'],
    },
    {
        category: 'Menu Management',
        permissions: ['View Menu', 'Edit Menu', 'Manage Prices', 'Inventory'],
    },
    {
        category: 'Staff & Administration',
        permissions: ['View Staff', 'Manage Staff', 'View Reports', 'System Settings'],
    },
    {
        category: 'Kitchen & Display',
        permissions: ['View KDS', 'Mark Ready', 'Kitchen Analytics'],
    }
];

export default function EditRoleForm() {
    return (
        <Card component={Paper} variant="outlined" sx={{ mt: 2, p: 1 }}>
            <CardContent>
                <Grid container spacing={3}>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            label="Role Name"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            label="Description"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>

                    <Box>
                        <Typography sx={{ mb: 2 }} variant='h5' component={"h5"}>
                            Assign Permissions
                        </Typography>
                        <Grid container spacing={3}>
                            {permissionGroups.map((group) => (
                                <Grid size={{ xs: 12 }} key={group.category}>
                                    <Paper variant="outlined" sx={{ p: 2, bgcolor: 'action.hover' }}>
                                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: 1 }}>
                                            {group.category}
                                        </Typography>
                                        <Divider sx={{ mb: 2 }} />
                                        <Grid container spacing={1}>
                                            {group.permissions.map((permission) => (
                                                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={permission}>
                                                    <Paper
                                                        variant="outlined"
                                                        sx={{
                                                            px: 2,
                                                            py: 0.5,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            '&:hover': { bgcolor: 'background.paper' }
                                                        }}
                                                    >
                                                        <FormControlLabel
                                                            control={<Checkbox size="small" />}
                                                            label={<Typography variant="body2">{permission}</Typography>}
                                                            sx={{ width: '100%', m: 0 }}
                                                        />
                                                    </Paper>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Box
                        component="div"
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '100%',
                            mt: 1,
                        }}
                    >
                        <Button variant="contained">Add Role</Button>
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
}

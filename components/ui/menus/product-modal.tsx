'use client';

import List from '@mui/material/List';
import ImageIcon from '@mui/icons-material/Image';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

export const items = [
    {
        id: 1,
        name: 'French Fries',
        category_id: 'cat-1',
        status: 'active',
        unit: 'none',
        image: null,
        price: 220,
        variants: [],
    },
    {
        id: 2,
        name: 'Classic Burger',
        category_id: 'cat-1',
        status: 'active',
        unit: 'none',
        image: null,
        variants: [
            {
                id: 'var-1',
                name: 'Small',
                quantity: null,
                price: 350,
                status: 'active',
            },
            {
                id: 'var-2',
                name: 'Medium',
                quantity: null,
                price: 450,
                status: 'active',
            },
            {
                id: 'var-3',
                name: 'Large',
                quantity: null,
                price: 550,
                status: 'active',
            },
        ],
    },
    {
        id: 3,
        name: 'Fresh Lime Drink',
        category_id: 'cat-2',
        status: 'active',
        unit: 'ml',
        image: null,
        variants: [
            {
                id: 'var-4',
                name: null,
                quantity: 250,
                price: 180,
                status: 'active',
            },
            {
                id: 'var-5',
                name: null,
                quantity: 500,
                price: 300,
                status: 'active',
            },
        ],
    },
    {
        id: 4,
        name: 'Cola Can',
        category_id: 'cat-2',
        status: 'active',
        unit: 'none',
        image: "https://images.unsplash.com/photo-1667204651371-5d4a65b8b5a9",
        price: 120,
        variants: [],
    },
    {
        id: 5,
        name: 'Ice Cream Sundae',
        category_id: 'cat-3',
        status: 'active',
        unit: 'none',
        image: null,
        variants: [
            {
                id: 'var-6',
                name: 'Vanilla',
                quantity: null,
                price: 250,
                status: 'active',
            },
            {
                id: 'var-7',
                name: 'Chocolate',
                quantity: null,
                price: 270,
                status: 'active',
            },
        ],
    },
    {
        id: 6,
        name: 'Grilled Chicken',
        category_id: 'cat-4',
        status: 'active',
        unit: 'none',
        image: "https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12",
        price: 1050,
        variants: [],
    },
    {
        id: 7,
        name: 'Chicken Wings',
        category_id: 'cat-1',
        status: 'active',
        unit: 'g',
        image: null,
        variants: [
            {
                id: 'var-8',
                name: null,
                quantity: 250,
                price: 420,
                status: 'active',
            },
            {
                id: 'var-9',
                name: null,
                quantity: 500,
                price: 780,
                status: 'active',
            },
        ],
    },
    {
        id: 8,
        name: 'Milkshake',
        category_id: 'cat-2',
        status: 'active',
        unit: 'ml',
        image: "https://images.unsplash.com/photo-1738986589529-4e64555b399a",
        variants: [
            {
                id: 'var-10',
                name: null,
                quantity: 300,
                price: 280,
                status: 'active',
            },
            {
                id: 'var-11',
                name: null,
                quantity: 500,
                price: 420,
                status: 'active',
            },
        ],
    },
    {
        id: 9,
        name: 'Chocolate Brownie',
        category_id: 'cat-3',
        status: 'inactive',
        unit: 'none',
        image: null,
        price: 300,
        variants: [],
    },
    {
        id: 10,
        name: 'Zinger Burger',
        category_id: 'cat-1',
        status: 'active',
        unit: 'none',
        image: null,
        variants: [
            {
                id: 'var-12',
                name: 'Regular',
                quantity: null,
                price: 520,
                status: 'active',
            },
            {
                id: 'var-13',
                name: 'Double Patty',
                quantity: null,
                price: 680,
                status: 'active',
            },
        ],
    },
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ProductModal() {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState([0]);
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

    const handleCollapse = (itemId: number) => {
        setOpenItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                onClick={handleOpen}
                variant="outlined"
                size="small"
                color="info"
                startIcon={<AddIcon />}
            >
                Add Items
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="products-modal"
            >
                <Box sx={style}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        {items.map((item) => {
                            const labelId = `checkbox-list-label-${item.id}`;

                            return (
                                <>
                                    <ListItem
                                        key={item.id}
                                        disablePadding
                                    >
                                        <ListItemButton role={undefined} onClick={() => {
                                            handleToggle(item.id)();
                                            handleCollapse(item.id);
                                        }} dense>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={checked.includes(item.id)}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </ListItemIcon>
                                            <ListItemAvatar>
                                                {item.image ? (
                                                    <Avatar alt={item.name} src={item.image} />
                                                ) : (
                                                    <Avatar alt={item.name}>
                                                        <ImageIcon fontSize='small' />
                                                    </Avatar>
                                                )}
                                            </ListItemAvatar>
                                            <ListItemText
                                                id={labelId}
                                                primary={item.name}
                                                secondary={
                                                    <>
                                                        {item.variants.length > 0 ? (
                                                            <>
                                                                <Typography
                                                                    component="span"
                                                                    variant="body2"
                                                                    sx={{ color: 'text.primary', display: 'inline' }}
                                                                >
                                                                    Variants: {" "}
                                                                </Typography>
                                                                {item.variants.length} options
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Typography
                                                                    component="span"
                                                                    variant="body2"
                                                                    sx={{ color: 'text.primary', display: 'inline' }}
                                                                >
                                                                    Price: {" "}
                                                                </Typography>
                                                                {item.price?.toLocaleString()}
                                                            </>
                                                        )}
                                                    </>
                                                }
                                            />
                                            {item.variants.length > 0 && (
                                                openItems[item.id] ? <ExpandLess /> : <ExpandMore />
                                            )}
                                        </ListItemButton>
                                        <Collapse in={openItems[item.id]} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemText primary="Starred" />
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </ListItem>
                                    <Divider />
                                </>
                            );
                        })}
                    </List>
                </Box>
            </Modal>
        </>
    );
}

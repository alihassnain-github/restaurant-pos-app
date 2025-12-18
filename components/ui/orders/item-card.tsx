import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface ItemCardProps {
    image: string;
    title: string;
    price: number;
    quantity: number;
}

export default function ItemCard({ title, image, price, quantity }: ItemCardProps) {
    return (
        <Card sx={{ display: 'flex', maxWidth: 300, maxHeight: 90, borderRadius: 2, boxShadow: 1 }}>
            <CardMedia
                component="img"
                sx={{ width: 80, objectFit: 'cover' }}
                image={image}
                alt={title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto', p: 1 }}>
                <CardContent sx={{ flex: '1 0 auto', p: '0 !important' }}>
                    <Typography variant="subtitle2" component="div" noWrap>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: {price}
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                        Qty: {quantity}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}
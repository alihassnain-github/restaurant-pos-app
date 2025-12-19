import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

interface ItemCardProps {
  image: string | null;
  title: string;
  price: number;
  quantity: number;
}

export default function ItemCard({
  title,
  image,
  price,
  quantity,
}: ItemCardProps) {
  return (
    <Card
      sx={{
        width: 200,
        flexShrink: 0,
        borderRadius: 3,
        boxShadow: 2,
        overflow: "hidden",
      }}
    >
      {/* Image wrapper */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 140,
          backgroundColor: "#f5f5f5",
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="200px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              alignContent: "center",
              height: 140,
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography
              component="p"
              textAlign="center"
              variant="caption"
              color="text.secondary"
            >
              <InsertPhotoOutlinedIcon />
            </Typography>
          </Box>
        )}
      </Box>

      <CardContent sx={{ p: 1.2 }}>
        <Typography variant="subtitle2" noWrap>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>

        <Typography variant="caption" fontWeight="bold">
          Qty: {quantity}
        </Typography>
      </CardContent>
    </Card>
  );
}

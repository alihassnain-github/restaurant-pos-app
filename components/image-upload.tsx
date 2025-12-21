"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Image from "next/image";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Box component="div" sx={{ mb: 2, width: "100%" }}>
      {preview ? (
        <Box
          component="div"
          sx={{
            position: "relative",
            width: "fit-content",
            height: "fit-content",
            mx: "auto",
          }}
        >
          <IconButton
            onClick={() => setPreview(null)}
            aria-label="remove"
            sx={{
              position: "absolute",
              top: -8,
              right: -8,
              bgcolor: "error.main",
              color: "white",
              width: 20,
              height: 20,
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <CloseOutlinedIcon sx={{ fontSize: 13 }} />
          </IconButton>
          <Image
            src={preview}
            alt="Image Preview"
            className="rounded-lg"
            width={100}
            height={100}
          />
        </Box>
      ) : (
        <Box
          component="label"
          sx={{
            width: 100,
            height: 100,
            borderWidth: "2px",
            borderColor: "lightgray",
            borderRadius: 2,
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "dashed",
            cursor: "pointer",
          }}
        >
          <AddPhotoAlternateOutlinedIcon fontSize="medium" color="action" />
          <VisuallyHiddenInput
            onChange={handleFileChange}
            type="file"
            name="image"
            accept="image/*"
          />
        </Box>
      )}
    </Box>
  );
}

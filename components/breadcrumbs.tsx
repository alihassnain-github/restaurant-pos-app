"use client";

import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box } from "@mui/material";

export interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <Box mb={2}>
      <MuiBreadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return isLast ? (
            <Typography
              key={crumb.href}
              variant="h5"
              component="h5"
              color="textPrimary"
            >
              {crumb.label}
            </Typography>
          ) : (
            <Link key={crumb.href} href={crumb.href}>
              <Typography
                key={crumb.href}
                variant="h5"
                component="h5"
                color="textSecondary"
              >
                {crumb.label}
              </Typography>
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
}

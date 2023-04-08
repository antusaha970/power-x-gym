import { Box, Typography } from "@mui/material";
import React from "react";

const AdminHeader = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: "bold",
          fontSize: "35px",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        Power-x-gym <font color="#FCD842">Admin Panel</font>
      </Typography>
    </Box>
  );
};

export default AdminHeader;

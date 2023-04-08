import styled from "@emotion/styled";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MenuButton = styled(Button)`
  margin-bottom: 10px;
  & a {
    text-decoration: none;
    color: #fff;
  }
`;

const AdminMenu = () => {
  return (
    <section>
      <Container maxWidth="lg">
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
        <Box>
          <Stack>
            <MenuButton variant="contained">
              <Link to="/admin/dashboard/userInfo">
                See Registered User Info
              </Link>
            </MenuButton>
            <MenuButton variant="contained">
              <Link to="/admin/dashboard/userInfo">Make a blog post</Link>
            </MenuButton>
          </Stack>
        </Box>
      </Container>
    </section>
  );
};

export default AdminMenu;

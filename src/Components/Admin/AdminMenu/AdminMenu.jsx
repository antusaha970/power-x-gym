import styled from "@emotion/styled";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../AdminHeader/AdminHeader";

export const MenuButton = styled(Button)`
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
        <AdminHeader />
        <Box>
          <Stack>
            <MenuButton variant="contained">
              <Link to="/admin/dashboard/userInfo">
                See Registered User Info
              </Link>
            </MenuButton>
            <MenuButton variant="contained">
              <Link to="/admin/dashboard/makeBlog">Make a blog post</Link>
            </MenuButton>
          </Stack>
        </Box>
      </Container>
    </section>
  );
};

export default AdminMenu;

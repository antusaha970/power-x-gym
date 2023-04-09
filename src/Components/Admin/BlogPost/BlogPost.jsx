import { Container } from "@mui/material";
import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { useForm, Controller } from "react-hook-form";

const BlogPost = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <AdminHeader />
      </Container>
    </section>
  );
};

export default BlogPost;

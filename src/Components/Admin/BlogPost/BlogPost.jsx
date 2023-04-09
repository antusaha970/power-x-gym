import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { useForm, Controller } from "react-hook-form";

const BlogPost = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      blogBody: "",
      author: "",
      coverImg: null,
    },
  });
  const [file, setFile] = useState(null);
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <Container maxWidth="lg">
        <AdminHeader />
        <Typography
          variant="h5"
          component="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Make a blog post
        </Typography>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="standard-basic"
                  label="Title"
                  variant="standard"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="blogBody"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="blogBody"
                  label="Blog Body"
                  variant="standard"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="author"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="author"
                  label="Author Name"
                  variant="standard"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </section>
  );
};

export default BlogPost;

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { useForm, Controller } from "react-hook-form";
import { client } from "../../../Api/Client";

const BlogPost = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      blogBody: "",
      author: "",
    },
  });
  const [file, setFile] = useState(null);
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("blogData", JSON.stringify(data));
    try {
      const response = await client.post("/postBlog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data) {
        alert("Blog is posted successfully");
        setFile(null);
        reset();
      } else {
        alert("Please try again later");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
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
            <Box
              sx={{
                padding: "10px 0",
              }}
            >
              <label htmlFor="coverImg">Enter Cover Image</label>
              <br />
              <br />
              <input type="file" id="coverImg" onChange={handleFile} />
            </Box>
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

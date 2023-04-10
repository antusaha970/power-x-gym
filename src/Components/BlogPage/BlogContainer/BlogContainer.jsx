import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { client } from "../../../Api/Client";
import BlogBox from "../BlogBox/BlogBox";
import ContentLoader from "../../Shared/ContentLoader/ContentLoader";
const BlogContainer = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function loadBlogData() {
      try {
        const response = await client.get("/blogData");
        setBlogData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    }
    loadBlogData();
  }, []);
  return (
    <section>
      <Container maxWidth="lg">
        <Box
          sx={{
            margin: "30px 0",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: "center",
              padding: "20px 0",
              fontWeight: "bold",
            }}
          >
            Our <font color="#FCD842">Blogs</font>
          </Typography>
          {isLoading && <ContentLoader />}
          <Grid container spacing={2}>
            {blogData?.map((blog) => (
              <BlogBox key={blog._id} blog={blog} />
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default BlogContainer;

import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { client } from "../../../Api/Client";
const BlogContainer = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    async function loadBlogData() {
      try {
        const response = await client.get("/blogData");
        setBlogData(response.data);
      } catch (error) {
        alert(error.message);
      }
    }
    loadBlogData();
  }, []);
  console.log(blogData);
  return (
    <section>
      <Container maxWidth="lg">hi</Container>
    </section>
  );
};

export default BlogContainer;

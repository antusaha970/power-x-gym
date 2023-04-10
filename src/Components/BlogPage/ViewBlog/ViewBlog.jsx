import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import { useParams } from "react-router-dom";
import { client } from "../../../Api/Client";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import { Box, Container, Typography } from "@mui/material";
import "./ViewBlog.css";
import ContentLoader from "../../Shared/ContentLoader/ContentLoader";

const ViewBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function loadBlog() {
      try {
        const response = await client.get(`/blogs/${id}`);
        setBlog(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert(error);
        window.location.reload();
      }
    }
    loadBlog();
  }, []);
  const dateOptions = {
    weekend: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(blog?.publishDate);
  return (
    <section>
      <TopHeader title={blog?.title} fontSize="30px" />
      <Container maxWidth="lg">
        {isLoading && <ContentLoader />}
        {!isLoading && (
          <>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                padding: "20px 0",
              }}
            >
              {blog?.image?.img && (
                <img
                  src={`data:image/png;base64, ${blog.image.img}`}
                  alt={blog?.title}
                  className="blogImg"
                />
              )}
            </Box>
            <Box>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "25px",
                }}
              >
                {blog?.title}
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ whiteSpace: "pre-wrap", padding: "10px 0" }}
              >
                {blog?.blogBody}
              </Typography>
              <Typography variant="p" component="p" sx={{ padding: "10px 0" }}>
                Written by : <b>{blog?.author}</b>
                <br />
                Published On: <b>{date.toLocaleString("en-US", dateOptions)}</b>
              </Typography>
            </Box>
          </>
        )}
      </Container>
      <Footer />
    </section>
  );
};

export default ViewBlog;

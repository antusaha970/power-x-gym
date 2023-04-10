import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ReadMoreButton = styled(Button)`
  & a {
    text-decoration: none;
    color: #ffff;
  }
`;

const BlogBox = ({ blog }) => {
  return (
    <Grid item lg={4} md={4} sm={6} xs={12}>
      <Card>
        <CardMedia
          sx={{ height: 180 }}
          image={`data:image/png;base64, ${blog.image.img}`}
          title={blog.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            sx={{
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            {blog.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: "50px",
              overflow: "auto",
            }}
          >
            {blog.blogBody.slice(0, 150)}...
          </Typography>
        </CardContent>
        <CardActions>
          <ReadMoreButton size="small" color="info" variant="contained">
            <Link to={`/blogs/${blog._id}`}>Read More</Link>
          </ReadMoreButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BlogBox;

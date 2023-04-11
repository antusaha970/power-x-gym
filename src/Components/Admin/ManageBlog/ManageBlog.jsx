import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { client } from "../../../Api/Client";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { MenuButton } from "../AdminMenu/AdminMenu";
import { Link } from "react-router-dom";

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await client.get("/blogData");
        setBlogs(response.data);
      } catch (error) {
        alert(error);
        console.log(error);
        window.location.reload();
      }
    }
    fetchBlogs();
  }, [blogs]);
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const result = await client.post("/deleteBlog", { id });
      if (result.data) {
        alert("Blog deleted successfully");
        setBlogs([]);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <section>
      <AdminHeader />
      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Author</TableCell>
                <TableCell align="right">Publish Date</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blogs?.map((blog) => (
                <TableRow
                  key={blog._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {blog.title}
                  </TableCell>
                  <TableCell align="right">{blog.author}</TableCell>
                  <TableCell align="right">
                    {new Date(blog.publishDate).toLocaleString("en-BD")}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <MenuButton
          variant="contained"
          sx={{
            display: "block",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <Link to="/admin/dashboard/menu">Back to menu</Link>
        </MenuButton>
      </Container>
    </section>
  );
};

export default ManageBlog;

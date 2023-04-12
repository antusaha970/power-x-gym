import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
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
import { client } from "../../../Api/Client";
import { MenuButton } from "../AdminMenu/AdminMenu";
import { Link } from "react-router-dom";

const ViewMessages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function fetchMessages() {
      try {
        const result = await client.get("/memberMessages");
        setMessages(result.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchMessages();
  }, []);
  console.log(messages);
  return (
    <section>
      <AdminHeader />
      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table aria-label="Member message table">
            <TableHead>
              <TableRow>
                <TableCell>Member Email</TableCell>
                <TableCell align="right">Message</TableCell>
                <TableCell align="right">Send Time</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messages?.map((message) => (
                <TableRow
                  key={message._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {message.email}
                  </TableCell>
                  <TableCell align="center">{message.message}</TableCell>
                  <TableCell align="center">
                    {new Date(message.sendTime).toLocaleString("en-US")}
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained">Replay</Button>
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

export default ViewMessages;

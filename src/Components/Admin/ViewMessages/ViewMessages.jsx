import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import {
  Button,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { client } from "../../../Api/Client";
import { MenuButton } from "../AdminMenu/AdminMenu";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    width: "80%",
  },
};
const ViewMessages = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      subject: "",
      message: "",
    },
  });
  const onSubmit = (data) => console.log(data);
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

  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section>
      <AdminHeader />
      <Container maxWidth="lg">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Replay Modal"
        >
          <Typography
            variant="h5"
            component="h5"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Send Reply Email
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="email-subject"
                    label="Enter Email Subject"
                    variant="outlined"
                    margin="normal"
                  />
                )}
              />
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="email-message"
                    label="Enter Email body"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                  />
                )}
              />
              <Button variant="contained">Send</Button>
            </Stack>
          </form>
        </Modal>
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
                    <Button variant="contained" onClick={openModal}>
                      Replay
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

export default ViewMessages;

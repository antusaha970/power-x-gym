import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { Container } from "@mui/material";
import { client } from "../../../Api/Client";

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
  return (
    <section>
      <AdminHeader />
      <Container maxWidth="lg"></Container>
    </section>
  );
};

export default ViewMessages;

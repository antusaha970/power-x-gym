import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { client } from "../../../Api/Client";

const AllUserInfo = () => {
  const [userInfos, setUserInfos] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await client.get("/allUserInfo");
      setUserInfos(response.data);
    })();
  }, []);
  console.log(userInfos);
  return (
    <section>
      <Container maxWidth="lg">
        <AdminHeader />
      </Container>
    </section>
  );
};

export default AllUserInfo;

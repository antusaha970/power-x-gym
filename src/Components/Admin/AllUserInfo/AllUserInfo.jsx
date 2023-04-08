import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { client } from "../../../Api/Client";
import { MenuButton } from "../AdminMenu/AdminMenu";
import { Link } from "react-router-dom";

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
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <caption>All Registered user data</caption>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Mobile Number</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">City</TableCell>
                  <TableCell align="right">Postal Code</TableCell>
                  <TableCell align="right">Zip Code</TableCell>
                  <TableCell align="right">Gender</TableCell>
                  <TableCell align="right">Plan</TableCell>
                  <TableCell align="right">Payment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userInfos?.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.firstName}
                    </TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.mobileNumber}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                    <TableCell align="right">{row.postal}</TableCell>
                    <TableCell align="right">{row.zipCode}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">{row.plan}</TableCell>
                    <TableCell align="right">{row.payment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
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

export default AllUserInfo;

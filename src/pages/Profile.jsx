import { Avatar, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../componentes/Navbar";

const Profile = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Container maxWidth="md">
        <Typography variant='h6'>Profile</Typography>
        <Avatar
          alt="Remy Sharp"
          src=""
          sx={{ width: 24, height: 24 }}
        ></Avatar>
        <Typography variant="p">SteamID: </Typography>
        <Typography variant="body1">76561198035383580</Typography>
      </Container>
    </>
  );
};

export default Profile;

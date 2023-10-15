import React from "react";
import Checkout from "../componentes/checkout";
import Navbar from "../componentes/Navbar";
import { Container, Typography } from "@mui/material";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" >
        <Typography variant="h1" align="center" fontSize="25px" mt={15} mb={10}>
        Compra de llaves
      </Typography>
        <Checkout />
      </Container>
    </>
  );
};

export default Cart;

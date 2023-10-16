
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import keyImagen from "../assets/Keys.png";
import styled from "@emotion/styled";
import { useKeyContext } from "../context/keyContext";


const Img = styled("img")({
  width: "15%",
  height: "100%",
});

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Checkout = () => {

  const { count, setCount} = useKeyContext();

   const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count> 0) {
      setCount(count - 1);
    }
  };
  
    const totalKeys = () => {
      return 1600 * count;
    };
    return (
      <>
      <Container style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }} sx={{ flexGrow: 1 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography>Checkout</Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={8} zeroMinWidth>
              <Box sx={boxStyle}>
                <Img src={keyImagen} noWrap />
                <Typography variant="p">Cantidad</Typography>
                <Button onClick={increment}>+</Button>
                <Button onClick={decrement}>-</Button>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Typography textAlign="center">{count}</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography textAlign="right">Total</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography textAlign="center">${totalKeys()} CLP</Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={boxStyle}>
                <Button color="primary">Comprar</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      </>
    );
  };
export default Checkout;

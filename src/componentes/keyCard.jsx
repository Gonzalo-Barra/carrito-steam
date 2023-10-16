import React, { useState } from "react";
import keyImagen from "../assets/Keys.png";
import { Box, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useKeyContext } from "../context/keyContext";

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Img = styled("img")({
  width: "55%",
  height: "100%",
});

const KeyCard = () => {
  const { count, setCount} = useKeyContext();
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count> 0) {
      setCount(count - 1);
    }
  };

  return (
    <Container maxWidth="sm" >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} zeroMinWidth>
            <Box sx={boxStyle}>
              <Img src={keyImagen} />
            </Box>
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <Box sx={boxStyle}>
              {count}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={boxStyle}>
              <Button onClick={increment}>+</Button>
              <Button onClick={decrement}>-</Button>
            </Box>
            <Box sx={boxStyle}>
              {count > 0 ? (
                <Link to="/cart">
                  <Button>Comprar</Button>
                </Link>
              ) : (
                <Button disabled>Comprar</Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default KeyCard;

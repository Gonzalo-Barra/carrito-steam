import React, { useState } from "react";
import keyImagen from "../assets/Keys.png";
import { Box, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
  const [key, setKeys] = useState(0);
  const increment = () => {
    setKeys(key + 1);
  };

  const decrement = () => {
    if (key > 0) {
      setKeys(key - 1);
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
              {key}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={boxStyle}>
              <Button onClick={increment}>+</Button>
              <Button onClick={decrement}>-</Button>
            </Box>
            <Box sx={boxStyle}>
              {key > 0 ? (
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

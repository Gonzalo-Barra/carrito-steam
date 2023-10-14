import React, { useState } from "react";
import keyImagen from "../assets/Keys.png";
import { Box, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Img = styled("img")({
  width: "25%",
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
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        {" "}
        <Img src={keyImagen} />
        <Typography variant="p">Llaves: {key}</Typography>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
      </Box>
      {key > 0 ? (
        <Link to="/cart">
          <Button>Comprar</Button>
        </Link>
      ) : (
        <Button disabled>Comprar</Button>
      )}
    </Container>
  );
};

export default KeyCard;

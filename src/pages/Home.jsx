import { Box, Container, Typography } from "@mui/material";
import KeyCard from "../componentes/keyCard";
import Navbar from "../componentes/Navbar";



function Home() {
  return (
    <>
    <Navbar />
    <Container maxWidth="md" >
      <Typography variant="h1" align="center" fontSize="25px" mt={15} mb={10}>
        Compra de llaves
      </Typography>
      <Box sx={{border:2}}>
        <KeyCard />
      </Box>
    </Container>
    </>
  );
}

export default Home;

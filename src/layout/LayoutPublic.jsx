import { Outlet } from "react-router-dom";

import Footer from "../componentes/Footer"
import Navbar from "../componentes/Navbar";
import { Box } from "@mui/material";
const LayoutPublic = () => {
    return (
        <Box style={{ height: '100vh' }}>
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    );
};
export default LayoutPublic;
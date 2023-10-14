import { Outlet } from "react-router-dom";

import Footer from "../componentes/Footer"
import NavbarDrawerResponsive from "../componentes/NavbarDrawerResponsive";
import { Box } from "@mui/material";
const LayoutPublic = () => {
    return (
        <Box style={{ height: '100vh' }}>
            <NavbarDrawerResponsive />
            <Outlet />
            <Footer />
        </Box>
    );
};
export default LayoutPublic;
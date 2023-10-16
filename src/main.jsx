import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CssBaseline, createTheme } from "@mui/material";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { KeyProvider } from "./context/keyContext";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <KeyProvider>
      <CssBaseline />
      <RouterProvider router={router} />
      </KeyProvider>
    </ThemeProvider>
  </React.StrictMode>
);

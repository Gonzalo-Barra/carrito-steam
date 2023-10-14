import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CssBaseline />
        <RouterProvider router={router} />
    </React.StrictMode>
);
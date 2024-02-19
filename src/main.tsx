import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { Routes } from "./components/routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import Providers from "./components/providers/providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={Routes} />
    </Providers>
  </React.StrictMode>,
);

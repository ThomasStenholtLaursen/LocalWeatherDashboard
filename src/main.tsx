import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ApplicationProviders from "./components/providers/ApplicationProviders.tsx";
import { ApplicationRoutes } from "./components/routes/ApplicationRoutes.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApplicationProviders>
      <RouterProvider router={ApplicationRoutes} />
    </ApplicationProviders>
  </React.StrictMode>,
);

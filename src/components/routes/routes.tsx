import App from "@/App";
import { HOME_PAGE } from "@/lib/paths";
import Dashboard from "@/pages/dashboard/dashboard";
import { ErrorPage } from "@/pages/error/error-page";
import { NotFoundPage } from "@/pages/not-found/not-found";
import { createBrowserRouter } from "react-router-dom";

export const Routes = createBrowserRouter([
  {
    path: HOME_PAGE,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

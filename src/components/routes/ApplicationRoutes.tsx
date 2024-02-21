import App from "@/App";
import { HOME_PAGE } from "@/lib/paths";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import { ErrorPage } from "@/pages/error/ErrorPage";
import { NotFoundPage } from "@/pages/notFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const ApplicationRoutes = createBrowserRouter([
  {
    path: HOME_PAGE,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

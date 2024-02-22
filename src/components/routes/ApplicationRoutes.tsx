import App from "@/App";
import { DASHBOARD_PAGE, ROOT } from "@/lib/paths";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import { ErrorPage } from "@/pages/error/ErrorPage";
import { HomePage } from "@/pages/home/HomePage";
import { NotFoundPage } from "@/pages/notFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const ApplicationRoutes = createBrowserRouter([
  {
    path: ROOT,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: DASHBOARD_PAGE,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

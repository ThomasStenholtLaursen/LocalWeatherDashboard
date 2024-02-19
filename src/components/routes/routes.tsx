import App from "@/App";
import { HOME_PAGE } from "@/lib/paths";
import Dashboard from "@/pages/dashboard/dashboard";
import { createBrowserRouter } from "react-router-dom";

export const Routes = createBrowserRouter([
  {
    path: HOME_PAGE,
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

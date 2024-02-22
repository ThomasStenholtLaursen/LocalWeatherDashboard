import { Outlet } from "react-router-dom";
import GlobalFooter from "./components/layout/footer/GlobalFooter";
import GlobalNavbar from "./components/layout/header/GlobalNavbar";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <GlobalNavbar />
      <Outlet />
      <GlobalFooter />
    </div>
  );
}

export default App;

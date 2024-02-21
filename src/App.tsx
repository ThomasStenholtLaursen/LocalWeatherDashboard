import { Outlet } from "react-router-dom";
import GlobalFooter from "./components/layout/footer/GlobalFooter";
import GlobalNavbar from "./components/layout/header/GlobalNavbar";

function App() {
  return (
    <>
      <GlobalNavbar />
      <Outlet />
      <GlobalFooter />
    </>
  );
}

export default App;

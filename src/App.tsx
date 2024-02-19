import { Outlet } from "react-router-dom";
import NavBar from "./components/layout/header/navbar";
import Footer from "./components/layout/footer/footer";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

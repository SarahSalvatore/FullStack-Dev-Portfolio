import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;

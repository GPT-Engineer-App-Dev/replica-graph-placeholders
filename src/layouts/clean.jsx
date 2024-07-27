import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

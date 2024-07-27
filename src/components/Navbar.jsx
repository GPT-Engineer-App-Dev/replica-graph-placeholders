import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-[#2c2c2c] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Rocket className="h-6 w-6 text-white" />
          <NavLink to="/" className="text-white hover:text-gray-300">Courses</NavLink>
          <NavLink to="/practice" className="text-white hover:text-gray-300">Practice</NavLink>
          <NavLink to="/roadmap" className="text-white hover:text-gray-300">Roadmap</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="bg-[#3c3c3c] text-white hover:bg-[#4c4c4c]">
            Pro
          </Button>
          <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};

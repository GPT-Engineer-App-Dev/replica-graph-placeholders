import Index from "./pages/Index.jsx";
import Practice from "./pages/Practice.jsx";
import Roadmap from "./pages/Roadmap.jsx";

export const navItems = [
  {
    title: "Courses",
    to: "/",
    page: <Index />,
  },
  {
    title: "Practice",
    to: "/practice",
    page: <Practice />,
  },
  {
    title: "Roadmap",
    to: "/roadmap",
    page: <Roadmap />,
  },
];

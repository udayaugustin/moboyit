
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItemProps {
  text: string;
  to: string;
  className?: string;
}

const NavItem = ({ text, to, className }: NavItemProps) => (
  <Link
    to={to}
    className={cn(
      "text-white hover:text-cyan-400 transition-colors duration-200 tracking-wider text-sm",
      className
    )}
  >
    {text}
  </Link>
);

const Navbar = () => {
  return (
    <nav className="flex flex-col w-full px-4 py-6 space-y-6">
      <div className="flex justify-center items-center space-x-20">
        <NavItem text="Playboyit" to="/play" className="font-medium text-base" />
        <NavItem text="Workboyit" to="/work" className="font-medium text-base" />
      </div>
      
      <div className="flex justify-between items-center px-4">
        <div className="flex space-x-8">
          <NavItem text="Explore" to="/explore" />
          <NavItem text="Bots Nearby" to="/bots-nearby" />
        </div>

        <div className="flex space-x-8">
          <NavItem text="Dire Tasks" to="/tasks" />
          <NavItem text="Express" to="/express" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

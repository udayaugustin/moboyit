
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
    <nav className="flex justify-between items-center w-full px-12 py-6">
      <div className="flex space-x-8">
        <NavItem text="Explore" to="/explore" />
        <NavItem text="Bots Nearby" to="/bots-nearby" />
      </div>
      
      <div className="flex space-x-16">
        <NavItem text="Playboyit" to="/play" className="font-medium" />
        <NavItem text="Workboyit" to="/work" className="font-medium" />
      </div>

      <div className="flex space-x-8">
        <NavItem text="Dire Tasks" to="/tasks" />
        <NavItem text="Express" to="/express" />
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import AuthButtons from "@/components/AuthButtons";
import AboutSection from "@/components/AboutSection";

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
    // <nav className="flex flex-col w-full px-4 py-4 space-y-4">
<nav className="bg-black text-white w-full py-4">
<div className="w-full max-w-[960px] mx-auto">
    <div className="flex justify-center gap-0">
          {/* Left column - Menu C and D with padding-top */}
          <div className="w-1/3 flex justify-end pt-3">
            <div className="flex space-x-4 sm:space-x-10 md:space-x-16 mr-4 sm:mr-6 md:mr-10">
            <NavItem text="Explore" to="/explore" className="font-medium" />
            <NavItem text="Bots Nearby" to="/bots-nearby" className="font-medium"/>
            </div>
          </div>
          
          {/* Center column - Menu A and B */}
          <div className="flex justify-center">
            <div className="flex space-x-4 sm:space-x-10 md:space-x-16">
            <NavItem text="Playboyit" to="/play" className="font-medium text-[17px]" />
            <NavItem text="Workboyit" to="/work" className="font-medium text-[17px]" />
            </div>
          </div>
          
          {/* Right column - Menu E and F with padding-top */}
          <div className="w-1/3 flex justify-start pt-3">
            <div className="flex space-x-4 sm:space-x-10 md:space-x-16 ml-4 sm:ml-6 md:ml-10">
            <NavItem text="Dire Tasks" to="/tasks" className="font-medium" />
            <NavItem text="Express" to="/express" className="font-medium" />
            </div>
          </div>
        </div>

      <div className="flex justify-center gap-0 pt-3">
        <div className="w-1/3 flex justify-end pt-14 items-start">
        <AuthButtons />
        </div>
        <div className="flex justify-center w-56 md:w-72">
        <Logo />        
        </div>
        <div className="w-1/3 flex justify-start pt-14 items-start">
        <AboutSection />
        </div>
      </div>
      {/* <div className="flex justify-center gap-0 mb-10">
        <div className="text-white tracking-[0.5em] text-sm md:text-lg font-light">
          M O B O Y I T
        </div>
      </div> */}

      </div>      
    </nav>
  );
};

export default Navbar;
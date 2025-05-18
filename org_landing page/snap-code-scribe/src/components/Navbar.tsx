
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#14294b] text-white py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">PointsTracker</span>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/resources" className="hover:text-gray-300">Resources</Link>
          <Link to="/faq" className="hover:text-gray-300">FAQs</Link>
          <Link to="/help" className="hover:text-gray-300">Help</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/account" className="hover:text-gray-300">My Account</Link>
          <Link to="/signin" className="hover:text-gray-300">Sign In</Link>
          <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-md">Register Event</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { Button } from "./Button";
import { FiUser } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-300 mx-auto py-4">
      <div className="text-4xl font-bold w-43.75">
        <Link to="/">BIKE</Link>
      </div>
      <nav className="text-lg min-w-[30%] flex justify-between items-center">
        <Link to="/">Home</Link>
        <Link to="/Admin">Admin</Link>
        <Link to="/bikes">Bikes</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="text-lg flex items-center gap-7">
        <Link to="/login">Login</Link>

        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
      </div>
    </header>
  );
};

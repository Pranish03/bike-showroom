import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-[1200px] mx-auto py-4">
      <div className="text-4xl font-bold">
        <Link to="/">BIKE</Link>
      </div>
      <nav className="text-lg min-w-[30%] flex justify-between items-center">
        <Link to="/">Home</Link>
        <Link to="/bikes">Bikes</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/login">
          <Button>Log in</Button>
        </Link>
      </nav>
    </header>
  );
};

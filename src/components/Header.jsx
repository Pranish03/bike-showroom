import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useFetch } from "../hooks/use-fetch";

export const Header = () => {
  const { data } = useFetch("/auth/me");

  const isAdmin = data?.data?.isAdmin;

  return (
    <header className="flex justify-between items-center w-300 mx-auto py-4">
      <div className="text-4xl font-bold w-43.75">
        <Link to="/">BIKE</Link>
      </div>
      <nav className="text-lg flex justify-between gap-10 items-center">
        <Link to="/">Home</Link>
        <Link to="/bikes">Bikes</Link>
        {isAdmin && <Link to="/manage-bikes">Manage bikes</Link>}
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="text-lg flex items-center gap-7">
        <Link to="/login">Login</Link>

        <Link to="/signup">
          <Button className="bg-green-600 hover:bg-green-700">Signup</Button>
        </Link>
      </div>
    </header>
  );
};

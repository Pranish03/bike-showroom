import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useFetch } from "../hooks/use-fetch";
import toast from "react-hot-toast";
import { axios } from "../lib/axios";

export const Header = () => {
  const { data, refetch } = useFetch("/auth/me");

  const navigate = useNavigate();

  const isAdmin = data?.data?.isAdmin;

  const handleLogout = async () => {
    localStorage.removeItem("auth-token");

    delete axios.defaults.headers.common["Authorization"];
    toast.success("Logged out successfully");
    await refetch();
    navigate("/");
  };

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

      <div className="text-lg">
        {data?.data ? (
          <div onClick={handleLogout}>
            <Button className="bg-green-600 hover:bg-green-700">Logout</Button>
          </div>
        ) : (
          <div className="flex items-center gap-7">
            <Link to="/login">Login</Link>

            <Link to="/signup">
              <Button className="bg-green-600 hover:bg-green-700">
                Signup
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown, FiChevronUp, FiUser } from "react-icons/fi";
import toast from "react-hot-toast";
import { axios } from "../lib/axios";
import { Button } from "./Button";
import { useFetch } from "../hooks/use-fetch";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

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
          <div className="relative flex justify-end text-right w-[167px]">
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="cursor-pointer max-w-min flex items-center gap-2 truncate"
            >
              {data?.data?.username}
              {showMenu ? (
                <FiChevronUp size={21} />
              ) : (
                <FiChevronDown size={21} />
              )}
            </div>

            {showMenu && (
              <div className="absolute top-8 right-0 p-1 bg-white rounded-xl border border-gray-100 shadow-md">
                <div className="flex justify-center mt-2 mb-1">
                  <div className="size-10 rounded-full flex justify-center items-center bg-black/10 text-black/60">
                    <FiUser size={24} />
                  </div>
                </div>
                <div className="block min-w-max text-left mb-3 px-3">
                  {data?.data?.email}
                </div>
                <div onClick={handleLogout}>
                  <Button className="bg-green-600 hover:bg-green-700 w-full">
                    Logout
                  </Button>
                </div>
              </div>
            )}
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

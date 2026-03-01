import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown, FiUser } from "react-icons/fi";
import toast from "react-hot-toast";
import { axios } from "../lib/axios";
import { Button } from "./Button";
import { useAuth } from "../hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, isAdmin, isLoading } = useAuth();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    localStorage.removeItem("auth-token");
    delete axios.defaults.headers.common["Authorization"];

    queryClient.setQueryData(["me"], null);
    queryClient.removeQueries({ queryKey: ["me"], exact: true });

    toast.success("Logged out successfully");
    setShowMenu(false);
    navigate("/");
  };

  if (isLoading) {
    return (
      <header className="flex justify-between items-center w-300 mx-auto py-4">
        <div className="text-4xl font-bold w-43.75">
          <Link to="/">BIKE</Link>
        </div>
        <div>Loading...</div>
      </header>
    );
  }

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
        {isAuthenticated ? (
          <div className="relative flex justify-end text-right w-41.75">
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="cursor-pointer max-w-min flex items-center gap-2 truncate"
            >
              {user?.data?.name}

              <FiChevronDown size={21} />
            </div>

            {showMenu && (
              <div className="absolute top-8 right-0 bg-white rounded-xl border border-gray-200 shadow-md">
                <div className="pt-1 px-1">
                  <div className="block min-w-max text-left hover:bg-gray-500/5 rounded-md py-1 px-2 cursor-default">
                    {user?.data?.email}
                  </div>
                  <div className="text-left hover:bg-gray-500/5 rounded-md py-1 px-2 cursor-default">
                    <span>Role - </span>{" "}
                    {user?.data?.isAdmin ? "admin" : "user"}
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-1" />

                <div className="pb-1 px-1">
                  <button
                    className="hover:bg-red-600/10 text-left text-red-600 w-full py-1 px-2 rounded-md cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
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

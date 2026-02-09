import { useState } from "react";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { axios } from "../../lib/axios";
import toast from "react-hot-toast";

export const Signup = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/auth/signup", formValue);
      console.log(res);
      toast.success("Welcome, please login now!");
      setFormValue({
        username: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute top-10 left-10 text-lg">
        <Link to="/" className="flex items-center gap-1">
          <IoIosArrowRoundBack size={30} />
          <span className="hover:underline">Back to home</span>
        </Link>
      </div>
      <div className="w-100">
        <h1 className="text-4xl mb-3 font-bold text-center">Signup</h1>
        <p className="text-center text-lg mb-8">Create a new account</p>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="username" className="text-lg block mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter a username"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formValue.username}
              onChange={(e) =>
                setFormValue((prev) => {
                  return { ...prev, username: e.target.value };
                })
              }
            />
          </div>

          <div>
            <label htmlFor="email" className="text-lg block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter an email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formValue.email}
              onChange={(e) =>
                setFormValue((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
            />
          </div>

          <div>
            <label htmlFor="password" className="text-lg block mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter a password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formValue.password}
              onChange={(e) =>
                setFormValue((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
            />
          </div>

          <Button className="bg-green-600 hover:bg-green-700 w-full">
            Signup
          </Button>
        </form>

        <div className="mt-4 text-center text-base">
          Already have an account?{" "}
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

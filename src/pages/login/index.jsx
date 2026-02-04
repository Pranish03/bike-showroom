import { useState } from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[400px]">
        <h1 className="text-4xl mb-3 font-bold text-center">Login</h1>
        <p className="text-center text-lg mb-8">Login to existing account</p>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formValue);
          }}
        >
          <div>
            <label htmlFor="email" className="text-lg block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
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
              placeholder="********"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formValue.password}
              onChange={(e) =>
                setFormValue((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
            />
          </div>

          <Button className={"w-full"}>Login</Button>
        </form>

        <div className="mt-4 text-center text-base">
          Don't have an account?{" "}
          <Link to="/signup" className="hover:underline">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
};

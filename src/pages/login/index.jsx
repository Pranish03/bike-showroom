import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ImSpinner8 } from "react-icons/im";
import { LoginValidationSchema } from "../../schemas/authSchema";
import { axios } from "../../lib/axios";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await axios.post("/auth/login", data);

      localStorage.setItem("auth-token", res?.data?.data?.token);

      toast.success(res?.data?.message);

      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginValidationSchema),
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute top-10 left-10 text-lg">
        <Link to="/" className="flex items-center gap-1">
          <IoIosArrowRoundBack size={30} />
          <span className="hover:underline">Back to home</span>
        </Link>
      </div>
      <div className="w-100">
        <h1 className="text-4xl mb-3 font-bold text-center">Login</h1>
        <p className="text-center text-lg mb-8">Login to existing account</p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="text-lg block mb-1">
              Email
            </label>
            <Input
              error={errors?.email}
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
          </div>

          <div>
            <label htmlFor="password" className="text-lg block mb-1">
              Password
            </label>
            <Input
              error={errors?.password}
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>

          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

          <Button
            className="bg-green-600 hover:bg-green-700 disabled:hover:bg-green-600 w-full flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading && <ImSpinner8 className="animate-spin" />}
            Login
          </Button>
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

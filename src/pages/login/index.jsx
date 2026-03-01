import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ImSpinner8 } from "react-icons/im";
import { LoginValidationSchema } from "../../schemas/authSchema";
import { login } from "../../api/auth";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const Login = () => {
  const navigate = useNavigate();

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

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("auth-token", data.data.token);
      toast.success(data.message);

      navigate("/");
    },
  });

  const onSubmit = (data) => mutation.mutate(data);

  const error =
    mutation.error?.response?.data?.message || mutation.error
      ? "Something went wrong"
      : "";

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
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register("email")}
              error={errors?.email}
            />
          </div>

          <div>
            <label htmlFor="password" className="text-lg block mb-1">
              Password
            </label>
            <Input
              id="password"
              type="password"
              {...register("password")}
              error={errors?.password}
            />
          </div>

          {error && <p className="mt-1 text-base text-red-600">{error}</p>}

          <Button
            className="bg-green-600 hover:bg-green-700 disabled:hover:bg-green-600 w-full flex items-center justify-center gap-2"
            disabled={mutation.isPending}
          >
            {mutation.isPending && <ImSpinner8 className="animate-spin" />}
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

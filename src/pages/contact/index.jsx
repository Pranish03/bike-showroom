import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { contactValidationSchema } from "../../schemas/contactSchema";
import { ImSpinner8 } from "react-icons/im";
import { submitContactForm } from "../../api/contact";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(contactValidationSchema),
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
    },
  });

  const onSubmit = (data) => mutation.mutate(data);

  const error =
    mutation.error?.response?.data?.error || mutation.error
      ? "Something went wrong"
      : "";

  return (
    <div className="max-w-300 mx-auto">
      <h2 className="text-3xl font-bold text-center my-10">Contact Us</h2>
      <form
        className="space-y-4 w-125 mx-auto mb-15"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="name" className="text-lg block mb-1">
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name")}
            error={errors?.name}
          />
        </div>

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
          <label htmlFor="subject" className="text-lg block mb-1">
            Subject
          </label>
          <Input
            id="subject"
            type="text"
            placeholder="Enter subject"
            {...register("subject")}
            error={errors?.subject}
          />
        </div>

        <div>
          <label htmlFor="message" className="text-lg block mb-1">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Enter your message"
            className={`
              w-full min-h-40 rounded-md border px-3 py-2 focus:outline-3
              ${errors?.message ? "border-red-600 focus:border-red-600 focus:outline-red-600/30" : "border-gray-300 focus:border-green-500 focus:outline-green-500/50"}
            `}
            {...register("message")}
          />
          {errors?.message && (
            <p className="mt-1 text-base text-red-600">
              {errors?.message?.message}
            </p>
          )}
        </div>

        {error && <p className="mt-1 text-base text-red-600">{error}</p>}

        <Button
          className="bg-green-600 hover:bg-green-700 disabled:hover:bg-green-600 w-full flex items-center justify-center gap-2"
          disabled={mutation.isPending}
        >
          {mutation.isPending && <ImSpinner8 className="animate-spin" />}
          Send
        </Button>
      </form>
    </div>
  );
};

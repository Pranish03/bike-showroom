import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ImSpinner8 } from "react-icons/im";
import { createBike } from "../../api/bike";
import { createBikeValidationSchema } from "../../schemas/bikeSchema";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const AddBike = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      brand: "",
      image: null,
      description: "",
      details: "",
    },
    resolver: zodResolver(createBikeValidationSchema),
  });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setValue("image", file, { shouldValidate: true });
  };

  const mutation = useMutation({
    mutationFn: createBike,
    onSuccess: (data) => {
      toast.success(data?.message);
      reset();
      navigate("/manage-bikes");
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("brand", data.brand);
    formData.append("image", data.image);
    formData.append("description", data.description);
    formData.append("details", data.details || "");

    mutation.mutate(formData);
  };

  const error =
    mutation.error?.response?.data?.message ||
    (mutation.error ? "Something went wrong" : "");

  return (
    <div className="max-w-300 mx-auto">
      <div className="text-lg mt-10 max-w-min">
        <Link to="/manage-bikes" className="flex items-center gap-1">
          <IoIosArrowRoundBack size={30} />
          <span className="hover:underline">Back</span>
        </Link>
      </div>

      <h2 className="text-3xl font-bold text-center mb-10">Add Bikes</h2>
      <form
        className="space-y-4 w-200 mx-auto mb-15"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="flex items-center gap-10">
          <div className="flex-1">
            <label htmlFor="name" className="text-lg block mb-1">
              Bike name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter bike name"
              {...register("name")}
              error={errors?.name}
            />
          </div>

          <div className="flex-1">
            <label htmlFor="price" className="text-lg block mb-1">
              Bike price
            </label>
            <Input
              id="price"
              type="text"
              placeholder="Enter bike price"
              {...register("price")}
              error={errors?.price}
            />
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex-1">
            <label htmlFor="brand" className="text-lg block mb-1">
              Brand name
            </label>
            <Input
              id="brand"
              type="text"
              placeholder="Enter brand name"
              {...register("brand")}
              error={errors?.brand}
            />
          </div>

          <div className="flex-1">
            <label htmlFor="image" className="text-lg block mb-1">
              Bike image
            </label>
            <Input
              id="image"
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              error={errors?.image}
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="text-lg block mb-1">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter bike description"
            className={`
              w-full min-h-40 rounded-md border px-3 py-2 focus:outline-3
              ${errors?.description ? "border-red-600 focus:border-red-600 focus:outline-red-600/30" : "border-gray-300 focus:border-green-500 focus:outline-green-500/50"}
            `}
            {...register("description")}
          />
          {errors?.description && (
            <p className="text-base text-red-600">
              {errors?.description?.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="details" className="text-lg block mb-1">
            Details
          </label>
          <textarea
            id="details"
            placeholder="Enter bike details"
            className="w-full min-h-40 rounded-md border px-3 py-2 focus:outline-3 border-gray-300 focus:border-green-500 focus:outline-green-500/50"
            {...register("details")}
          />
        </div>

        {error && <p className="mt-1 text-base text-red-600">{error}</p>}

        <Button
          className="bg-green-600 hover:bg-green-700 disabled:hover:bg-green-600 w-full flex items-center justify-center gap-2"
          disabled={mutation.isPending}
        >
          {mutation.isPending && <ImSpinner8 className="animate-spin" />}
          Add Bike
        </Button>
      </form>
    </div>
  );
};

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useFetch } from "../../hooks/use-fetch";
import { Button } from "../../components/Button";
import { axios } from "../../lib/axios";
import toast from "react-hot-toast";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import { NotAvailable } from "../../components/NotAvailable";

export const EditBike = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    price: "",
    brand: "",
    image: null,
    description: "",
    details: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const {
    data: userData,
    isLoading: isUserLoading,
    error: userError,
  } = useFetch("/auth/me");

  const {
    data: bikeData,
    isLoading: isBikeLoading,
    error: bikeError,
  } = useFetch(`/bike/${id}`);

  const bike = bikeData?.bike;

  useEffect(() => {
    if (!bike) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormValue({
      name: bike.name,
      price: bike.price,
      brand: bike.brand,
      image: null,
      description: bike.description,
      details: bike.details,
    });
  }, [bike]);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("name", formValue.name);
      formData.append("price", formValue.price);
      formData.append("brand", formValue.brand);
      formData.append("description", formValue.description);
      formData.append("details", formValue.details);
      if (formValue.image) formData.append("image", formValue.image);

      await axios.put(`/bike/${id}`, formData);

      toast.success("Bike updated successfully!");

      navigate("/manage-bikes");
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  if (isUserLoading || isBikeLoading) return <Loading />;

  if (!userData?.data?.isAdmin) return <NotAvailable />;

  if (userError || bikeError) return <Error error={userError || bikeError} />;

  return (
    <div className="max-w-300 mx-auto">
      <div className="text-lg mt-10">
        <Link to="/manage-bikes" className="flex items-center gap-1">
          <IoIosArrowRoundBack size={30} />
          <span className="hover:underline">Back</span>
        </Link>
      </div>
      <h2 className="text-3xl font-bold text-center mb-10">Edit Bikes</h2>
      <form className="space-y-4 w-200 mx-auto mb-15" onSubmit={onSubmit}>
        <div className="flex items-center gap-10">
          <div className="flex-1">
            <label htmlFor="name" className="text-lg block mb-1">
              Bike name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter bike name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formValue.name}
              onChange={(e) =>
                setFormValue((p) => ({ ...p, name: e.target.value }))
              }
            />
          </div>

          <div className="flex-1">
            <label htmlFor="price" className="text-lg block mb-1">
              Bike price
            </label>
            <input
              id="price"
              type="text"
              placeholder="Enter bike price"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formValue.price}
              onChange={(e) =>
                setFormValue((p) => ({ ...p, price: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex-1">
            <label htmlFor="brand" className="text-lg block mb-1">
              Brand name
            </label>
            <input
              id="brand"
              type="text"
              placeholder="Enter brand name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formValue.brand}
              onChange={(e) =>
                setFormValue((p) => ({ ...p, brand: e.target.value }))
              }
            />
          </div>

          <div className="flex-1">
            <label htmlFor="image" className="text-lg block mb-1">
              Bike image
            </label>
            <input
              id="image"
              type="file"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) =>
                setFormValue((p) => ({
                  ...p,
                  image: e.target.files?.[0] || null,
                }))
              }
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
            className="w-full min-h-50 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formValue.description}
            onChange={(e) =>
              setFormValue((p) => ({ ...p, description: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="details" className="text-lg block mb-1">
            Details
          </label>
          <textarea
            id="details"
            placeholder="Enter bike details"
            className="w-full min-h-50 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formValue.details}
            onChange={(e) =>
              setFormValue((p) => ({ ...p, details: e.target.value }))
            }
          />
        </div>

        <Button className="bg-green-600 hover:bg-green-700 w-full">
          Edit Bike
        </Button>
      </form>
    </div>
  );
};

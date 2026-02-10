import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/use-fetch";
import { Button } from "../../components/Button";

export const Bike = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(`/bike/${id}`);

  if (isLoading) return "Loading...";

  if (error) return error || "Error Occurred";

  return (
    <div className="max-w-300 h-[calc(100vh-350px)] mx-auto flex items-center gap-12.5">
      <img
        className="w-125 h-75 object-cover rounded-lg"
        src={`${import.meta.env.VITE_SERVER_URL}/${data?.bike.image}`}
        alt=""
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">{data?.bike.name}</h2>
        <p className="text-lg mb-6">{data?.bike.description}</p>
        <div className="flex gap-5 items-center">
          <span className="font-bold text-xl">Rs. {data?.bike.price}</span>
          <Button className="bg-green-600 hover:bg-green-700">
            View Offer
          </Button>
        </div>
      </div>
    </div>
  );
};

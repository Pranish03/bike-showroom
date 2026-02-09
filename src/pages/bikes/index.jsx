import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { useFetch } from "../../hooks/use-fetch";

export const Bikes = () => {
  const { data, error, isLoading } = useFetch("/bike");

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return error || "Error Occurred";
  }

  return (
    <div className="max-w-300 mx-auto">
      <h2 className="text-3xl font-bold text-center my-10">Bikes</h2>
      <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-20">
        {data?.bikes.map((bike) => (
          <Link key={bike._id} to={`/bike/${bike._id}`}>
            <Card
              image={"http://localhost:3000/" + bike.image}
              id={bike._id}
              desc={bike.description}
              name={bike.name}
              price={bike.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

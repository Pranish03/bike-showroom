import { Hero } from "./Hero";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/use-fetch";

export const Home = () => {
  const { data, isLoading, error } = useFetch("/bike");

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return error || "Error Occurred";
  }

  return (
    <main className="w-300 mx-auto">
      <Hero />

      <section>
        <h2 className="text-3xl font-bold mb-10">Latest bikes</h2>

        <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-20">
          {data?.bikes.map((bike) => (
            <Link key={bike._id} to={`bike/${bike._id}`}>
              <Card
                image={`${import.meta.env.VITE_SERVER_URL}/${bike.image}`}
                desc={bike.description}
                name={bike.name}
                price={bike.price}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

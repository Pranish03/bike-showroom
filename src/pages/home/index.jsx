import { Link } from "react-router-dom";
import { Hero } from "./Hero";
import { Card } from "../../components/Card";
import { useFetch } from "../../hooks/use-fetch";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

export const Home = () => {
  const { data, isLoading, error } = useFetch("/bike");

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <main className="w-300 min-h-[calc(100dvh-365px)] mx-auto">
      <Hero />

      <section>
        {data?.bikes.length !== 0 && (
          <h2 className="text-3xl font-bold mb-10">Latest bikes</h2>
        )}

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

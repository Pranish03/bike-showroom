import { Hero } from "./Hero";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

const images = [
  { id: 1, src: "/bike-1.jpg" },
  { id: 2, src: "/bike-2.jpg" },
];

export const Home = () => {
  return (
    <main className="w-300 mx-auto">
      <Hero />

      <section>
        <h2 className="text-3xl font-bold mb-10">Latest bikes</h2>

        <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-20">
          {images.map((img) => (
            <Link key={img.id} to={`bike/${img.id}`}>
              <Card image={img} id={img.id} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

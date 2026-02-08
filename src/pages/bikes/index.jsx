import { Link } from "react-router-dom";
import { Card } from "../../components/Card";

const images = [
  { id: 1, src: "/bike-1.jpg" },
  { id: 2, src: "/bike-2.jpg" },
  { id: 3, src: "/bike-3.jpg" },
  { id: 4, src: "/bike-4.jpg" },
];

export const Bikes = () => {
  return (
    <div className="max-w-300 mx-auto">
      <h2 className="text-3xl font-bold text-center my-10">Bikes</h2>
      <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-20">
        {images.map((img) => (
          <Link key={img.id} to={`/bike/${img.id}`}>
            <Card image={img} id={img.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

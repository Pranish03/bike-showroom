import { Link } from "react-router-dom";
import { Card } from "../../components/Card";

const images = [
  { id: 1, src: "/bike1.png" },
  { id: 2, src: "/bike2.png" },
  { id: 3, src: "/bike1.png" },
  { id: 4, src: "/bike2.png" },
];

export const Bikes = () => {
  return (
    <div className="w-300 mx-auto">
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

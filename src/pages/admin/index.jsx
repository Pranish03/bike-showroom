import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

const images = [
  { id: 1, src: "/bike1.png" },
  { id: 2, src: "/bike2.png" },
  { id: 3, src: "/bike1.png" },
  { id: 4, src: "/bike2.png" },
];

export const Admin = () => {
  return (
    <div className="w-300 mx-auto">
      <h2 className="text-3xl font-bold my-10">Bikes</h2>

      <div className="flex items-center justify-between my-10">
        <input
          className="px-4 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-1 focus:outline-green-600"
          type="text"
          placeholder="Search"
        />
        <Button>Add Bikes</Button>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-20">
        {images.map((img) => (
          <Link key={img.id} to={`bike/${img.id}`}>
            <Card image={img} id={img.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

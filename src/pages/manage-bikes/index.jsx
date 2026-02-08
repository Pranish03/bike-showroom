import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const images = [
  { id: 1, src: "/bike-1.jpg" },
  { id: 2, src: "/bike-2.jpg" },
  { id: 3, src: "/bike-3.jpg" },
  { id: 4, src: "/bike-4.jpg" },
];

export const ManageBikes = () => {
  return (
    <div className="max-w-300 mx-auto">
      <div className="flex justify-between items-center my-15">
        <h2 className="text-3xl font-bold">Manage Bikes</h2>
        <Link to="/add-bike">
          <Button className="bg-green-600 hover:bg-green-700">Add Bikes</Button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mb-20">
          <thead className="py-4 border-y border-black/40 font-bold">
            <tr>
              <th className="text-left p-4">S.N.</th>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Image</th>
              <th className="text-right p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {images.map((image) => (
              <tr key={image.id} className="border-b border-black/40">
                <td className="p-4">{image.id}</td>
                <td className="p-4 font-medium">Thunderbolt Rider</td>
                <td className="p-4">
                  <img
                    src={image.src}
                    alt=""
                    className="w-20 h-14 object-cover rounded-md"
                  />
                </td>

                <td className="p-4">
                  <div className="flex justify-end gap-3">
                    <Link to={`/edit-bike/${image.id}`}>
                      <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg cursor-pointer">
                        <FiEdit2 size={18} />
                      </button>
                    </Link>
                    <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg cursor-pointer">
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

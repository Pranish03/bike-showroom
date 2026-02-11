import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useFetch } from "../../hooks/use-fetch";
import { axios } from "../../lib/axios";
import toast from "react-hot-toast";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

export const ManageBikes = () => {
  const { data, isLoading, error } = useFetch("/auth/me");

  const navigate = useNavigate();

  const {
    data: bikeData,
    refetch: refetchBikes,
    isLoading: isBikeLoading,
    error: bikeError,
  } = useFetch("/bike");

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this bike?")) return;

    try {
      await axios.delete(`/bike/${id}`);
      toast.success("Bike deleted successfully");
      refetchBikes();
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };

  if (isLoading || isBikeLoading) return <Loading />;

  if (error || bikeError) return <Error error={error || bikeError} />;

  if (!data?.data?.isAdmin) navigate("/");

  return (
    <div className="max-w-300 min-h-[calc(100dvh-425px)] mx-auto">
      <div className="flex justify-between items-center my-15">
        <h2 className="text-3xl font-bold">Manage Bikes</h2>
        <Link to="/add-bike">
          <Button className="bg-green-600 hover:bg-green-700">Add Bikes</Button>
        </Link>
      </div>

      {bikeData?.bikes.length !== 0 ? (
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
              {bikeData?.bikes.map((bike, i) => (
                <tr key={bike._id} className="border-b border-black/40">
                  <td className="p-4">{++i}</td>
                  <td className="p-4 font-medium">{bike.name}</td>
                  <td className="p-4">
                    <img
                      src={`${import.meta.env.VITE_SERVER_URL}/${bike.image}`}
                      alt=""
                      className="w-20 h-14 object-cover rounded-md"
                    />
                  </td>

                  <td className="p-4">
                    <div className="flex justify-end gap-3">
                      <Link to={`/edit-bike/${bike._id}`}>
                        <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg cursor-pointer">
                          <FiEdit2 size={18} />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(bike._id)}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg cursor-pointer"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-xl font-medium text-center">No bike data</div>
      )}
    </div>
  );
};

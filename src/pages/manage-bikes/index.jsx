import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useBikes } from "../../hooks/useBikes";
import { deleteBike } from "../../api/bike";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import { Button } from "../../components/Button";

export const ManageBikes = () => {
  const { data, isLoading, error } = useBikes();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteBike,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["bikes"] });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Something went wrong");
    },
  });

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this bike?")) return;
    mutation.mutate(id);
  };

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="max-w-300 min-h-[calc(100dvh-421px)] mx-auto">
      <div className="flex justify-between items-center my-15">
        <h2 className="text-3xl font-bold">Manage Bikes</h2>
        <Link to="/add-bike">
          <Button className="bg-green-600 hover:bg-green-700">Add Bikes</Button>
        </Link>
      </div>

      {data?.bikes?.length !== 0 ? (
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
              {data?.bikes?.map((bike, i) => (
                <tr key={bike._id} className="border-b border-black/40">
                  <td className="p-4">{++i}</td>
                  <td className="p-4 font-medium">{bike.name}</td>
                  <td className="p-4">
                    <img
                      src={bike.image}
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

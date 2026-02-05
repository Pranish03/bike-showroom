import { useParams } from "react-router-dom";

export const Bike = () => {
  const { id } = useParams();

  return (
    <div className="w-[1200px] h-[calc(100vh-400px)] mx-auto">
      <h1 className="text-3xl font-bold my-10 text-center">Bike {id}</h1>
    </div>
  );
};

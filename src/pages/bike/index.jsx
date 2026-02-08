import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";

export const Bike = () => {
  const { id } = useParams();

  return (
    <div className="max-w-300 h-[calc(100vh-350px)] mx-auto flex items-center gap-12.5">
      <img
        className="w-125 h-75 object-cover rounded-lg"
        src={`/bike-${id}.jpg`}
        alt=""
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">Thunderbolt Rider</h2>
        <p className="text-lg mb-6">
          Unleash the power of lightning as you speed through the streets. Built
          with a lightweight yet durable frame, it delivers smooth handling and
          stable performance across city roads and highways. The ergonomic
          seating position ensures comfort on long rides, while the responsive
          braking system provides confidence and control in all conditions.
        </p>
        <div className="flex gap-5 items-center">
          <span className="font-bold text-xl">$ 90,000</span>
          <Button className="bg-green-600 hover:bg-green-700">
            View Offer
          </Button>
        </div>
      </div>
    </div>
  );
};

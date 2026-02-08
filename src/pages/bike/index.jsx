import { Button } from "../../components/Button";

export const Bike = () => {
  return (
    <div className="w-300 h-[calc(100vh-350px)] mx-auto flex items-center gap-12.5">
      <img
        className="w-125 h-75 object-cover rounded-lg"
        src="/bike1.png"
        alt=""
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">Thunderbolt Rider</h2>
        <p className="text-lg mb-6">
          Unleash the power of lightning as you speed through the streets.
        </p>
        <div className="flex gap-5 items-center">
          <span className="font-bold text-xl">$90,000</span>
          <Button>View Offer</Button>
        </div>
      </div>
    </div>
  );
};

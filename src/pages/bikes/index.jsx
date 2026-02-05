import { Card } from "../../components/Card";

export const Bikes = () => {
  return (
    <div className="w-[1200px] mx-auto">
      <h2 className="text-3xl font-bold text-center my-10">Bikes</h2>
      <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-20">
        <Card image={"/bike1.png"} id={1} />
        <Card image={"/bike2.png"} id={2} />
        <Card image={"/bike1.png"} id={3} />
        <Card image={"/bike2.png"} id={4} />
      </div>
    </div>
  );
};

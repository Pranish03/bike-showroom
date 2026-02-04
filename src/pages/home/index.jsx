import { Button } from "../../components/Button";

export const Home = () => {
  return (
    <main className="w-[1200px] mx-auto py-10 flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold mb-3">Ride Beyond Limits</h1>
        <p className="text-lg mb-5">
          Discover high-performance bikes engineered for speed, control, and
          pure adrenaline. Built for riders who demand more from every mile.
        </p>
        <Button>Explore More</Button>
      </div>
      <img src="/bike.png" alt="" />
    </main>
  );
};

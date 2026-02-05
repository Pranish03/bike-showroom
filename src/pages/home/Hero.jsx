import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="py-10 flex justify-between items-center gap-52">
      <div>
        <h1 className="text-4xl font-bold mb-3">Ride Beyond Limits</h1>
        <p className="text-lg mb-5">
          Discover high-performance bikes engineered for speed, control, and
          pure adrenaline. Built for riders who demand more from every mile.
        </p>
        <Link to="/bikes">
          <Button className={"flex items-center gap-1"}>
            Explore More
            <IoIosArrowRoundForward size={34} />
          </Button>
        </Link>
      </div>
      <img src="/hero.png" alt="" />
    </section>
  );
};

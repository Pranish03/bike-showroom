import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Footer = () => {
  return (
    <footer className="bg-black/95">
      <div className="max-w-300 mx-auto py-10 flex justify-between text-white/90 border-b border-white/20">
        <div className="text-lg">
          <h4 className="text-xl mb-2 font-medium">
            Built for riders. Engineered for performance.
          </h4>
          <p className="w-125 text-white/50 text-base">
            We design and deliver high-quality bikes that combine power,
            comfort, and cutting-edge technology —made for every kind of
            ride.future
          </p>
        </div>
        <div className="text-lg">
          <h4 className="text-xl mb-2 font-medium">Quick links</h4>
          <div className="flex flex-col text-base">
            <Link className="text-white/50 hover:text-white/90" to="/">
              Home
            </Link>
            <Link className="text-white/50 hover:text-white/90" to="/bikes">
              Bikes
            </Link>
            <Link className="text-white/50 hover:text-white/90" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xl mb-2 font-medium">News letter</h4>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full rounded-md border bg-white border-white px-3 py-2 placeholder:text-black/50 text-black/80 focus:outline-none"
            />
            <Button className="bg-green-600 hover:bg-green-700">
              Subscribe
            </Button>
          </div>
          <p className="text-white/50 text-base">
            Subscribe our newsletter and get updates.
          </p>
        </div>
      </div>
      <div className="text-base text-white/90 text-center py-8">
        © 2026 BIKE — Ride the Future.
      </div>
    </footer>
  );
};

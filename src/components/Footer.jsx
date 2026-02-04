import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-[1200px] mx-auto">
      <div className="border-y-2 border-gray-900 py-10 flex justify-around">
        <div className="text-lg">
          <h4 className="text-2xl mb-2 font-medium">
            Built for riders. Engineered for performance.
          </h4>
          <p className="w-[500px]">
            We design and deliver high-quality bikes that combine power,
            comfort, and cutting-edge technology —made for every kind of
            ride.future
          </p>
        </div>
        <div className="text-lg">
          <h4 className="text-2xl mb-2 font-medium">Quick Links</h4>
          <div className="flex flex-col pl-3">
            <Link to="/">Home</Link>
            <Link to="/bikes">Bikes</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="text-lg text-center py-3">
        © 2026 Logo — Ride the Future.
      </div>
    </footer>
  );
};

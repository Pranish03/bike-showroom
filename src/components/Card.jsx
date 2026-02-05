import { Link } from "react-router-dom";

export const Card = ({ image, id }) => {
  return (
    <Link to={`/bike/${id}`}>
      <img className="w-full aspect-video rounded-xl mb-3" src={image} alt="" />
      <h3 className="font-bold text-xl">Thunderbolt Rider</h3>
      <p className="text-lg truncate">
        Unleash the power of lightning as you speed through the streets.
      </p>
      <span className="text-xl font-bold">$ 90,000</span>
    </Link>
  );
};

export const Card = ({ image }) => {
  return (
    <div>
      <img
        className="w-full aspect-video rounded-xl mb-3"
        src={image.src}
        alt=""
      />
      <h3 className="font-bold text-xl">Thunderbolt Rider</h3>
      <p className="text-lg truncate">
        Unleash the power of lightning as you speed through the streets.
      </p>
      <span className="text-xl font-bold">$ 90,000</span>
    </div>
  );
};

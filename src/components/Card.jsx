export const Card = ({ image, name, desc, price }) => {
  return (
    <div>
      <img
        className="w-full h-60 object-cover rounded-xl mb-3"
        src={image}
        alt=""
      />
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-lg truncate">{desc}</p>
      <span className="text-xl font-bold">{price}</span>
    </div>
  );
};

export const Button = ({ children, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors ease-in text-white font-medium text-lg cursor-pointer ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

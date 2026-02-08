export const Button = ({ children, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg transition-colors ease-in text-white font-medium text-lg cursor-pointer ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

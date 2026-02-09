export const Button = ({ children, className = "", disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={`px-4 py-2 rounded-lg transition-colors ease-in text-white font-medium text-lg
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        ${className}`}
    >
      {children}
    </button>
  );
};

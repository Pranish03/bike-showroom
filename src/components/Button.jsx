export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-lg transition-colors ease-in text-white 
        font-medium text-lg cursor-pointer disabled:opacity-60 
        disabled:cursor-not-allowed
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

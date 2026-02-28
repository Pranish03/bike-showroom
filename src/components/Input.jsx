export const Input = ({ className = "", error, ...props }) => {
  return (
    <div className="w-full">
      <input
        className={`
          ${
            error
              ? "border-red-600 focus:border-red-600 focus:outline-red-600/30"
              : "border-gray-300 focus:border-green-500 focus:outline-green-500/50"
          }
          w-full rounded-md border px-3 py-2 focus:outline-3  
          ${className}
        `}
        {...props}
      />
      {error && error.message && (
        <p className="mt-1 text-base text-red-600">{error.message}</p>
      )}
    </div>
  );
};

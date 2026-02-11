export const Error = ({ error }) => {
  return (
    <div className="max-w-300 mx-auto min-h-[calc(100dvh-365px)] flex text-center items-center justify-center text-xl font-medium">
      {error || "Error Occurred"}
    </div>
  );
};

export const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex items-center justify-center">
      <div className="flex  flex-col justify-center gap-4">
        <div className="max-w-lg text-3xl font-bold">
          "The Customer Support I recived was exeptional. The support team went
          above and beyond to address my concerns."
        </div>
        <div className="flex flex-col">
          <div className="max-w-md  text-xl font-semibold">Julius Winfield</div>
          <div className="max-w-md  text-md font-medium text-gray-600">
            CEO | ACME Corp
          </div>
        </div>
      </div>
    </div>
  );
};

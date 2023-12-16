const RightHandSection = () => {
  return (
    <div className="w-1/5 sticky top-0 right-0 max-h-screen overflow-y-auto no-scrollbar pt-36 pl-8">
      <div className="flex flex-col gap-16">
        {Array.from(Array(13).keys()).map((item, index) => (
          <div className="h-40 bg-blue-400 rounded-xl text-center"></div>
        ))}
      </div>
    </div>
  );
};

export default RightHandSection;

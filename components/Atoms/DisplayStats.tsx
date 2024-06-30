const DisplayStats = ({ Icon, label, num }: any) => {
  return (
    <div className="flex flex-col gap-2 text-gray-500 px-4 justify-center">
      <div>
        <Icon className="w-8 h-8 my-auto text-gray-500 mx-auto" />
      </div>
      <span className="text-xs text-center">{label}</span>
      <span className="text-xl text-center text-black font-bold">
        {num.toString()}
      </span>
    </div>
  );
};

export default DisplayStats;

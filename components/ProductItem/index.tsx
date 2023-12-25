const ProductItem = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg relative w-48 h-[28rem]">
      <div className="h-3/5 bg-red-400">
        <img
          className="w-full h-full rounded-2xl"
          src="https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="h-full flex-col gap-2 bg-blue-400">
        <div className="px-4 py-4 ">
          <div className="font-bold text-xl mb-2">
            The Coldest Sunset
          </div>
        </div>
        <div className="px-4 py-4 ">
          <div className="font-bold text-xl mb-2">
            The Coldest Sunset
          </div>
        </div>
        <div className="px-4 py-4 ">
          <div className="font-bold text-xl mb-2">
            The Coldest Sunset
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

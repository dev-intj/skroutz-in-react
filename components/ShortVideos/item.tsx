const ShortVideoItem = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm relative w-[11rem] h-80">
      <img
        className="w-full h-full rounded-lg"
        src="https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="px-4 py-4 absolute bottom-0">
        <div className="font-bold text-xl mb-2">
          The Coldest Sunset
        </div>
      </div>
    </div>
  );
};

export default ShortVideoItem;

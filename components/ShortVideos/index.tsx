import ShortVideoItem from "./item";

const ShortVideos = ({ uploadSection }: any) => {
  return (
    <div className="flex flex-col gap-4 px-4 py-8">
      <h4 className="text-xl">Short Videos</h4>
      <div className="relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
        <div className="flex flex-row gap-4">
          {Array.from(Array(13).keys()).map((item, index) => (
            <ShortVideoItem key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortVideos;

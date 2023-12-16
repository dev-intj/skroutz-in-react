import FullWidthShowCase from "../FullWidthShowCase";
import LeftSideSection from "../LeftSideSection";
import RightHandSection from "../RightHandSection";
import ShortVideos from "../ShortVideos";

const MainPage = () => {
  return (
    <div className="flex flex-row justify-between px-24">
      <LeftSideSection />
      <div className="w-3/5 mx-auto pt-36">
        <div className="flex flex-col gap-32">
          <ShortVideos />
          <FullWidthShowCase />
          {Array.from(Array(100).keys()).map((item, index) => (
            <div className="h-24 bg-green-400">s</div>
          ))}
        </div>
      </div>
      <RightHandSection />
    </div>
  );
};

export default MainPage;

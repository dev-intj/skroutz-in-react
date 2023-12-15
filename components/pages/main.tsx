import LeftSideSection from "../LeftSideSection";
import RightHandSection from "../RightHandSection";

const MainPage = () => {
  return (
    <div className="flex flex-row justify-between px-24">
      <LeftSideSection />
      <div className="w-3/5 mx-auto pt-24">
        {Array.from(Array(100).keys()).map((item, index) => (
          <div className="h-24 bg-green-400">s</div>
        ))}
      </div>
      <RightHandSection />
    </div>
  );
};

export default MainPage;

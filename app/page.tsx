import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import LeftSideSection from "@/components/Constructors/LeftSideSection";
import RightHandSection from "@/components/Constructors/ShowCaseSection";
import MainSectionConstructor from "@/components/MainSectionConstructor";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row justify-between px-8 ">
        <LeftSideSection />
        <MainSectionConstructor />
        <RightHandSection />
      </div>
      <Footer />
    </>
  );
}

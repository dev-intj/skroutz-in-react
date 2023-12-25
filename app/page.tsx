import Footer from "@/components/sections/Footer";
import NavBar from "@/components/sections/NavBar";

import LeftSideSection from "@/components/sections/LeftSideSection";
import RightHandSection from "@/components/sections/RightHandSection";
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

import NavBar from "@/components/NavBar";

// import LeftSideSection from "@/components/Constructors/LeftSideSection";
// import RightHandSection from "@/components/Constructors/ShowCaseSection";
// import MainSectionConstructor from "@/components/Constructors/MainSectionConstructor";

import LeftSideSection from "@/components/Organisms/Constructors/LeftSideSection";
import RightHandSection from "@/components/Organisms/Constructors/ShowCaseSection";
import MainSectionConstructor from "@/components/Organisms/Constructors/MainSectionConstructor";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex flex-row justify-between px-8">
        <LeftSideSection />
        <MainSectionConstructor />
        <RightHandSection />
      </main>
    </>
  );
}

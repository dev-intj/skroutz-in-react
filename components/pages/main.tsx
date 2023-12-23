// components
import FullWidthShowCase from "../FullWidthShowCase";
import ShortVideos from "../ShortVideos";
import ProductsShowCase from "../ProductsShowCase";

// sections
import LeftSideSection from "@/components/sections/LeftSideSection";
import RightHandSection from "@/components/sections/RightHandSection";

const MainPage = () => {
  return (
    <div className="flex flex-row justify-between px-8 ">
      <LeftSideSection />
      <div className="w-3/5 mx-auto pt-36 px-16">
        <div className="flex flex-col gap-32 pb-16">
          <ShortVideos uploadSection={true} />
          <FullWidthShowCase
            title={"100 Χρόνια Παιχνίδι!"}
            subTitle={
              "Γιορτάστε μαζί μας τα γενέθλια της Hasbro!"
            }
            link={
              "https://www.skroutz.gr/sponsorship_stats/3116/t/1/m/0/b/0/i/0?ts=1702756898"
            }
            img={{
              src: "",
              alt: "",
            }}
            mode="card"
          />
          <FullWidthShowCase
            title={"100 Χρόνια Παιχνίδι!"}
            subTitle={
              "Γιορτάστε μαζί μας τα γενέθλια της Hasbro!"
            }
            link={
              "https://www.skroutz.gr/sponsorship_stats/3116/t/1/m/0/b/0/i/0?ts=1702756898"
            }
            img={{
              src: "",
              alt: "",
            }}
            mode="categories"
          />
          <ProductsShowCase
            title="Κρέμες Ματιών Αντιγήρανσης"
            redirectButton={false}
            showStars={false}
          />
        </div>
      </div>
      <RightHandSection />
    </div>
  );
};

export default MainPage;

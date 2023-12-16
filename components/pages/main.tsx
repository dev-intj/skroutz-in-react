import FullWidthShowCase from "../FullWidthShowCase";
import FullWidthShowCaseWithCategories from "../FullWidthShowCaseWithCategories";
import LeftSideSection from "../LeftSideSection";
import ProductsShowCase from "../ProductsShowCase";
import RightHandSection from "../RightHandSection";
import ShortVideos from "../ShortVideos";

const MainPage = () => {
  return (
    <div className="flex flex-row justify-between px-24">
      <LeftSideSection />
      <div className="w-3/5 mx-auto pt-36">
        <div className="flex flex-col gap-32">
          <ShortVideos />
          <FullWidthShowCase
            title={"100 Χρόνια Παιχνίδι!"}
            subTitle={"Γιορτάστε μαζί μας τα γενέθλια της Hasbro!"}
            link={
              "https://www.skroutz.gr/sponsorship_stats/3116/t/1/m/0/b/0/i/0?ts=1702756898"
            }
          />
          <FullWidthShowCaseWithCategories />
          <ProductsShowCase title="Κρέμες Ματιών Αντιγήρανσης" />
          <ProductsShowCase
            title="Κρέμες Ματιών Αντιγήρανσης"
            redirectButton={false}
            showStars={false}
          />
          <ShortVideos uploadSection={false} />
          <FullWidthShowCase
            title={"100 Χρόνια Παιχνίδι!"}
            subTitle={"Γιορτάστε μαζί μας τα γενέθλια της Hasbro!"}
            link={
              "https://www.skroutz.gr/sponsorship_stats/3116/t/1/m/0/b/0/i/0?ts=1702756898"
            }
          />
          <FullWidthShowCaseWithCategories showImage={false} />
          <FullWidthShowCase
            title={"100 Χρόνια Παιχνίδι!"}
            subTitle={"Γιορτάστε μαζί μας τα γενέθλια της Hasbro!"}
            link={
              "https://www.skroutz.gr/sponsorship_stats/3116/t/1/m/0/b/0/i/0?ts=1702756898"
            }
          />
          {Array.from(Array(100).keys()).map((item, index) => (
            <div className="h-24 bg-green-400" key={index}>
              s
            </div>
          ))}
        </div>
      </div>
      <RightHandSection />
    </div>
  );
};

export default MainPage;

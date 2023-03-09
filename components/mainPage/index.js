import { SearchBar } from "@components/molecules/searchBar";

// organisms
import { NewsCarousel } from "@components/organisms/carousel";
import { CategoriesSection } from "@components/organisms/categoriesSection";
import { DiscountSection } from "@components/organisms/discountSection";
import { NewsSection } from "@components/organisms/newsSection";

export const MainPage = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="title">Skroutz</h1>
        <SearchBar />
      </div>
      <NewsCarousel />
      <CategoriesSection title="Κατηγορίες προϊόντων" />
      <DiscountSection />
      <CategoriesSection title="Σχολικές τσάντες για κάθε ηλικία" />
      <NewsSection />
      <CategoriesSection title="Τα προϊόντα με τις περισσότερες πωλήσεις στο Skroutz για αυτόν τον μήνα" />
    </div>
  );
};

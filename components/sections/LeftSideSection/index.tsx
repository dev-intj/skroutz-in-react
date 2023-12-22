import Categories from "./Categories";
import PopularSearches from "./PopularSearches";

const categories: any[] = [
  {
    img: {
      src: "https://a.scdn.gr/assets/schwartz/timeline/ChristmasGifts-a0d4510f31dd6557d54b2a475c6a4b4c.png",
      alt: "",
    },
    title: "Προτάσεις Δώρων",
    status: "hot!",
    bgColor: "#ffda00",
  },
  {
    img: {
      src: "https://d.scdn.gr/assets/schwartz/timeline/Christmas-074d3cda358a72cda2feeb3249b3a700.png",
      alt: "",
    },
    title: "Όλα για τα Xmas",
    bgColor: "#ffda00",
  },
  {
    img: {
      src: "https://d.scdn.gr/assets/schwartz/timeline/Christmas-074d3cda358a72cda2feeb3249b3a700.png",
      alt: "",
    },
    title: "Supermarket",
    status: "νέο!",
    bgColor: "#5db740",
  },
  {
    img: {
      src: "https://d.scdn.gr/assets/schwartz/timeline/verticals/Offers-ea3da8863aba98c47fa4e1f549f8e19c.png",
      alt: "",
    },
    title: "Προσφορές",
    bgColor: "#0e0e1c",
  },
  {
    img: {
      src: "https://a.scdn.gr/assets/schwartz/timeline/ChristmasGiftcards-2c3556a7b8a51b4426ebb1983a4d474e.png",
      alt: "",
    },
    title: "Δωροκάρτες",
    bgColor: "#ffda00",
  },
  {
    img: {
      src: "https://c.scdn.gr/assets/schwartz/timeline/verticals/Technology-85c9df40d4c893c2c5b0f765cbfc3648.png",
      alt: "",
    },
    title: "Τεχνολογία",
    bgColor: "#1d84b0",
  },
  {
    img: {
      src: "https://b.scdn.gr/assets/schwartz/timeline/verticals/Home-b27a6579e644348ddb5e689134e687f1.png",
      alt: "",
    },
    title: "Σπίτι - Κήπος",
    bgColor: "#bca580",
  },
  {
    img: {
      src: "https://a.scdn.gr/assets/schwartz/timeline/verticals/Fashion-e3be985400b1be40ab7e5a410acb27c3.png",
      alt: "",
    },
    title: "Μόδα",
    bgColor: "#6f69ad",
  },
  {
    img: {
      src: "https://c.scdn.gr/assets/schwartz/timeline/verticals/Hobby-cb107564ab9e28b9f81a97c4f4b5d2db.png",
      alt: "",
    },
    title: "Hobby - Αθλητισμός",
    bgColor: "#20a8a6",
  },
  {
    img: {
      src: "https://a.scdn.gr/assets/schwartz/timeline/verticals/Beauty-acf3b9b3f2d695bfd68b2836d2d00915.png",
      alt: "",
    },
    title: "Υγεία - Ομορφιά",
    bgColor: "#dd6c75",
  },
  {
    img: {
      src: "https://c.scdn.gr/assets/schwartz/timeline/verticals/Kids-76b7dabe871aa5fead89c7f2abb640a5.png",
      alt: "",
    },
    title: "Παιδικά - Βρεφικά",
    bgColor: "#feb555",
  },
  {
    img: {
      src: "https://d.scdn.gr/assets/schwartz/timeline/verticals/Auto-808a6a233ac196e069e204445c419b76.png",
      alt: "",
    },
    title: "Auto - Moto",
    bgColor: "#6d7a87",
  },
  {
    img: {
      src: "https://d.scdn.gr/assets/schwartz/timeline/verticals/B2b-e382d19060b5fbf975c0f492733c4c33.png",
      alt: "",
    },
    title: "Επαγγελματικά - B2B",
    bgColor: "#a2a2a2",
  },
];

const LeftSideSection = () => {
  return (
    <div className="w-1/5 sticky top-0 left-0 max-h-screen overflow-y-auto no-scrollbar pt-36 pr-8">
      <div className="flex flex-col gap-16">
        <Categories items={categories} />
        <PopularSearches />
      </div>
    </div>
  );
};

export default LeftSideSection;

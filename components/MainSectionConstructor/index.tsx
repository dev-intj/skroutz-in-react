import FullWidthShowCase from "../FullWidthShowCase";
import ShortVideos from "../ShortVideos";
import ProductsShowCase from "../ProductsShowCase";

const MainSectionConstructor = () => {
  return (
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
            src: "https://a.scdn.gr/ds/generic_posts/images/692/20231215175523_pic_timeline.jpg",
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
            src: "https://d.scdn.gr/ds/content_graph_relation/images/18/mobile_20220419200500_07e6c1e2.png",
            alt: "",
          }}
          mode="categories"
          buttons={[
            {
              img: {
                src: "https://d.scdn.gr/ds/categories/1165/20200804174553_40e449e5.jpeg",
                alt: "",
              },
              title: "Μπουρνούζια",
              link: "",
            },
            {
              img: {
                src: "https://d.scdn.gr/ds/categories/1760/20180117164627_51e14200.jpeg",
                alt: "",
              },
              title: "Πατάκια Μπάνιου",
              link: "",
            },
            {
              img: {
                src: "https://c.scdn.gr/ds/categories/1762/20171113121548_c2626d89.jpeg",
                alt: "",
              },
              title: "Κουρτίνες Μπάνιου",
              link: "",
            },
          ]}
        />
        <ProductsShowCase
          title="Κρέμες Ματιών Αντιγήρανσης"
          redirectButton={false}
          showStars={false}
        />
        <FullWidthShowCase
          title={
            "Επίλεξε μονόχρωμα λευκά είδη για το δωμάτιό σου"
          }
          link={
            "https://www.skroutz.gr/sponsorship_stats/3116/t/1/m/0/b/0/i/0?ts=1702756898"
          }
          mode="categories"
          buttons={[
            {
              img: {
                src: "//d.scdn.gr/images/sku_main_images/011410/11410175/medium_20221124131022_nef_nef_sentoni_yperdiplo_me_lasticho_160x200x30_jersey_1019_aqua.jpeg",
                alt: "",
              },
              title: "Σεντόνια",
              link: "",
            },
            {
              img: {
                src: "https://d.scdn.gr/ds/categories/1760/20180117164627_51e14200.jpeg",
                alt: "",
              },
              title: "Κουβερλί",
              link: "",
            },
            {
              img: {
                src: "https://c.scdn.gr/ds/categories/1762/20171113121548_c2626d89.jpeg",
                alt: "",
              },
              title: "Κουρτίνες",
              link: "",
            },
            {
              img: {
                src: "//d.scdn.gr/images/sku_main_images/024794/24794089/medium_20200916141356_borea_paplomatothiki_moni_160by240_solid_line_pontiki_mayro.jpeg",
                alt: "",
              },
              title: "Παπλωματοθήκες",
              link: "",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MainSectionConstructor;

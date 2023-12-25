import { isEmpty, get } from "lodash";
/* 
"title": "Frezyderm Diamond Velvet Κρέμα Προσώπου για Ενυδάτωση, Αντιγήρανση & Σύσφιξη με Υαλουρονικό Οξύ 50ml",
    "reviews": {
      "stars": 4,
      "count": 97
    },
    "img": {
      "src": "https://c.scdn.gr/images/sku_main_images/022324/22324570/large_20210302161524_frezyderm_diamond_velvet_anti_wrinkle_cream_50ml.jpeg",
      "alt": ""
    },
    "toPrice": 38.37,
    "link": "",
    "liked": false
*/

const ProductItem = ({
  img,
  title,
  reviews,
  toPrice,
}: any) => {
  return (
    <div className="flex relative flex-col rounded-lg p-0 overflow-hidden border-none w-[14rem]">
      {!isEmpty(img) && (
        <a
          className="flex relative items-center justify-center h-auto p-0 rounded-lg max-h-full overflow-hidden aspect-[3/4]
        after:absolute after:top-0 after:w-full after:h-full after:rounded-lg after:bg-black after:pointer-events-none after:opacity-5"
        >
          <img
            className="object-contain inline-block align-middle max-w-[80%]"
            src={img.src}
            alt={img.alt}
          />
        </a>
      )}
    </div>
  );
};

export default ProductItem;

import { isEmpty, get } from "lodash";

const ProductItem = ({
  img,
  title,
  reviews,
  toPrice,
  showStars,
}: any) => {
  return (
    <div className="flex relative flex-col gap-4 rounded-lg p-0 overflow-hidden border-none max-w-[13rem]">
      {!isEmpty(img) && (
        <a
          className="min-h-[20rem] max-h-[20rem] flex relative items-center justify-center h-auto p-0 rounded-lg overflow-hidden aspect-[3/4]
        after:absolute after:top-0 after:w-full after:h-full after:rounded-lg after:bg-black after:pointer-events-none after:opacity-5"
        >
          <img
            className="object-contain inline-block align-middle max-w-[85%]"
            src={img.src}
            alt={img.alt}
          />
        </a>
      )}
      <div className="flex flex-col gap-4">
        <span
          className={`${
            showStars ? "line-clamp-3" : "line-clamp-1"
          } overflow-hidden text-md`}
        >
          {title}
        </span>
        {showStars && (
          <div className="flex flex-row gap-1">
            <div>stars</div>
            <span>(1)</span>
          </div>
        )}
        <span className="text-sm">
          από <span className="font-bold">{toPrice} €</span>
        </span>
      </div>
    </div>
  );
};

export default ProductItem;

import { isEmpty, get } from "lodash";

const ProductItem = ({
  img,
  title,
  reviews,
  toPrice,
}: any) => {
  return (
    <div className="flex relative flex-col gap-4 rounded-lg p-0 overflow-hidden border-none max-w-[14rem]">
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
      <div className="flex flex-col justify-between h-1/4 flex-wrap overflow-hidden">
        <h3 className="text-sm">{title}</h3>

        <h3 className="text-sm">από {toPrice}</h3>
      </div>
    </div>
  );
};

export default ProductItem;

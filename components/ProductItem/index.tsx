const ProductItem = ({
  img,
  title,
  reviews,
  toPrice,
}: any) => {
  return (
    <div className="flex relative flex-col rounded-lg p-0 overflow-hidden border-none w-[14rem]">
      <a
        className="flex relative items-center justify-center h-auto p-0 rounded-lg max-h-full overflow-hidden aspect-[3/4]
        after:absolute after:top-0 after:w-full after:h-full after:rounded-lg after:bg-black after:pointer-events-none after:opacity-5"
      >
        <img
          className="object-contain inline-block align-middle min-h-[12rem] min-w-[14rem]"
          src="https://b.scdn.gr/images/sku_main_images/010725/10725017/fixedratio_20161228162638_nef_nef_yperdipli_veloute_loft_grey.jpeg"
        />
      </a>
    </div>
  );
};

export default ProductItem;

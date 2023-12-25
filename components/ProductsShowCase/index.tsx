import ProductItem from "../ProductItem";

const ProductsShowCase = ({
  title,
  redirectButton,
  showStars,
}: any) => {
  return (
    <div className="flex flex-col gap-4 px-4 ">
      <h4 className="text-xl">{title}</h4>
      <div className="relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
        <div className="flex flex-row gap-4">
          {Array.from(Array(13).keys()).map(
            (item, index) => (
              <ProductItem key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsShowCase;

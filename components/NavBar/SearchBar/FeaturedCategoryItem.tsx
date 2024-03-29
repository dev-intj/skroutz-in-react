const FeaturedCategoryItem = ({
  src = "https://c.scdn.gr/ds/categories/22/20171113120918_458cb257.jpeg",
}: any) => {
  return (
    <div className="flex flex-row w-1/2 h-1/4 gap-4">
      <div className="my-auto">
        <div className="relative rounded-2xl overflow-hidden w-20 h-20">
          <img
            src={src}
            className="h-auto max-w-full rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 my-auto h-full max-w-full overflow-auto py-4 pr-8">
        <h4 className="h-full text-base text-ellipsis">
          Ηλεκτρονικοί Υπολογιστές
        </h4>
        <div className="flex flex-row max-h-full overflow-scroll no-scrollbar flex-wrap">
          <a href="/" className="">
            PC (Αναβάθμιση Υπολογιστή),
          </a>
          <a href="/" className="">
            PC (Αναβάθμιση Υπολογιστή),
          </a>
          <a href="/" className="">
            PC (Αναβάθμιση Υπολογιστή),
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategoryItem;

const FeaturedShowCaseInSearchBar = ({
  src = "https://a.scdn.gr/ds/mega_menu_banners/images/66/20231215101651_mega_banner_dora_gia_olous_kai_tora_dora.jpg",
}: any) => {
  return (
    <div className="">
      <div className="my-auto w-80 h-44">
        <div className="relative rounded-xl overflow-hidden w-full h-full">
          <img
            src={src}
            className="h-auto max-w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedShowCaseInSearchBar;

"use client";

import ShortVideoItem from "../../Atoms/ShortVideoItem";
import UploadShortVideoItem from "../../Atoms/UploadShortVideoItem";
import { ReactCarousel } from "../../utils";

import { HeaderTitle } from "@/components/utils";
import { PlayIcon } from "@heroicons/react/24/solid";

const ShortVideos = ({ uploadSection = false }: any) => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <HeaderTitle
        title={"Short Videos"}
        iconWrapper="bg-[#f46353] rounded-full p-2"
        icon={<PlayIcon className="h-4 w-4 text-white" />}
      />
      <ReactCarousel>
        {uploadSection && <UploadShortVideoItem />}
        {Array.from(Array(14).keys()).map((item, index) => (
          <ShortVideoItem
            key={index}
            title={`The Coldest Sunset - ${index}`}
          />
        ))}
      </ReactCarousel>
    </div>
  );
};

export default ShortVideos;

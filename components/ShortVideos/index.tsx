"use client";

import ShortVideoItem from "./item";
import UploadShortVideoItem from "./uploadItem";
import { ReactCarousel } from "../utils";

const ShortVideos = ({ uploadSection }: any) => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <h4 className="text-xl">Short Videos</h4>
      <ReactCarousel>
        {uploadSection && (
          <UploadShortVideoItem />
        )}
        {Array.from(Array(14).keys()).map(
          (item, index) => (
            <ShortVideoItem
              key={index}
              title={`The Coldest Sunset - ${index}`}
            />
          )
        )}
      </ReactCarousel>
    </div>
  );
};

export default ShortVideos;

"use client";

import { isEmpty } from "lodash";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { RoundedImage } from "../../utils";

const CategoriesMode = ({
  title,
  subTitle,
  link,
  img,
  mode = "card",
  buttons = [],
}: any) => {
  return (
    <div
      className={`flex flex-col items-center mx-4 rounded-3xl border`}
    >
      {!isEmpty(img) && (
        <div className="w-full h-44">
          <img
            className="object-cover h-full w-full rounded-3xl rounded-b-none"
            src={img.src}
            alt={img.alt}
          />
        </div>
      )}
      <div className="flex flex-col justify-between leading-normal text-left w-full p-4">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {subTitle}
        </p>
        {!isEmpty(buttons) && (
          <div className="flex flex-row gap-2 py-4 flex-wrap">
            {buttons.map((button: any, index: number) => (
              <a
                className="flex flex-row gap-2 border rounded-full pl-1 pr-4 py-1 text-sm text-gray-500 border-gray-200 cursor-pointer"
                href={button.link}
                key={index}
              >
                {!isEmpty(button.img) && (
                  <div className="">
                    <RoundedImage
                      src={button.img.src}
                      alt={button.img.alt}
                      width={"h-12 w-12"}
                      bgColor=""
                      imgClass="h-full"
                    />
                  </div>
                )}
                <span className="my-auto">
                  {button.title}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesMode;

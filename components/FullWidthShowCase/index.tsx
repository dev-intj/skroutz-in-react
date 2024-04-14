"use client";

import { isEmpty } from "lodash";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { RoundedImage } from "../utils";

// mode = "card" || "categories"

const CardMode = ({
  title,
  subTitle,
  link,
  img,
  mode = "card",
}: any) => {
  return (
    <div
      className={`flex flex-row items-center mx-4 rounded-3xl h-52 border`}
    >
      {!isEmpty(img) && (
        <div className="h-full w-1/2">
          <img
            className="object-cover h-full w-full rounded-3xl rounded-r-none "
            src={img.src}
            alt={img.alt}
          />
        </div>
      )}
      <div className="flex flex-col justify-between p-16 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {subTitle}
        </p>
        <a
          className="flex flex-row items-center text-blue-400 gap-2 font-bold"
          href={link}
        >
          <span>Βρες τα εδώ</span>
          <ChevronRightIcon className="h-4 w-4 text-blue-500 mt-1" />
        </a>
      </div>
    </div>
  );
};

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

const FullWidthShowCase = ({
  title,
  subTitle,
  link,
  img,
  mode = "card",
  buttons,
}: any) => {
  return mode === "card" ? (
    <CardMode
      title={title}
      subTitle={subTitle}
      img={img}
      link={link}
      buttons={buttons}
    />
  ) : (
    <CategoriesMode
      title={title}
      subTitle={subTitle}
      img={img}
      link={link}
      buttons={buttons}
    />
  );
};

export default FullWidthShowCase;

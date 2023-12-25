import { isEmpty } from "lodash";

import { ChevronRightIcon } from "@heroicons/react/24/solid";

const FeatureShowCaseItem = ({
  image,
  title,
  subtitle,
  button,
  showCases,
}: any) => {
  return (
    <div className="flex flex-col gap-8 rounded-xl text-center px-8 py-8 border">
      {!isEmpty(image) && (
        <img
          className="object-cover min-w-[16rem] w-full"
          src={image.src}
          alt={image.alt}
        />
      )}
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-bold text-left">
          {title}
        </h1>
        <h4 className="text-md text-gray-500 text-left font-normal">
          {subtitle}
        </h4>
      </div>
      {!isEmpty(button) && (
        <button
          className={`border p-2 border-gray-500 text-gray-600 rounded-md`}
        >
          {button.title}
        </button>
      )}
      {!isEmpty(showCases) &&
        showCases.map((showCase: any) => (
          <button
            className="flex flex-row w-full bg-red-400 items-center rounded-xl px-4 py-2"
            style={{
              backgroundColor: showCase.backgroundColor,
            }}
          >
            <img
              className="object-cover w-5/6 max-w-[14 rem]"
              src={showCase.src}
              alt={showCase?.alt}
            />
            <div className="flex justify-items-end w-full justify-end">
              <ChevronRightIcon className="h-6 w-6 text-gray-700" />
            </div>
          </button>
        ))}
    </div>
  );
};

export default FeatureShowCaseItem;

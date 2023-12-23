import { isEmpty } from "lodash";

import { ChevronRightIcon } from "@heroicons/react/24/solid";

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
            src="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=2192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <a className="flex flex-row items-center text-blue-400 gap-2 font-bold">
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
}: any) => {
  return (
    <div
      className={`flex flex-col items-center mx-4 rounded-3xl border`}
    >
      {!isEmpty(img) && (
        <div className="w-full h-72">
          <img
            className="object-cover h-full w-full rounded-3xl rounded-b-none"
            src="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=2192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      )}
      <div className="flex flex-col justify-between p-16 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title} - CATEGORIES MODE
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {subTitle}
        </p>
        <a className="flex flex-row items-center text-blue-400 gap-2 font-bold">
          <span>Βρες τα εδώ</span>
          <ChevronRightIcon className="h-4 w-4 text-blue-500 mt-1" />
        </a>
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
}: any) => {
  return mode === "card" ? (
    <CardMode
      title={title}
      subTitle={subTitle}
      img={img}
      link={link}
    />
  ) : (
    <CategoriesMode
      title={title}
      subTitle={subTitle}
      img={img}
      link={link}
    />
  );
};

export default FullWidthShowCase;

import { Dispatch, SetStateAction } from "react";
import ReactPortal from "../../utils/ReactPortal";

import CategoryItem from "@/components/CategoryItem";

import FeaturedCategoryItem from "./FeaturedCategoryItem";
import FeaturedShowCase from "./FeaturedShowCase";

import { ChevronRightIcon } from "@heroicons/react/24/solid";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const CategoriesModal = ({
  isOpen,
  setIsOpen,
}: ModalProps) => {
  if (!isOpen) {
    return;
  }
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed z-10 w-screen overflow-y-auto top-[3rem]">
          <div className="flex min-h-full items-end justify-center p-4 text-center">
            <div className="relative transform overflow-hidden rounded-3xl bg-white text-left text-black shadow-2xl transition-all my-16">
              <div className="h-[48rem] w-[86rem] flex flex-row gap-6 py-8 px-8 divide-x-2 divide-gray-100">
                <div className="flex flex-col gap-6 w-2/5 overflow-y-scroll no-scrollbar">
                  {Array.from(
                    Array(10).keys()
                  ).map((item, index) => (
                    <CategoryItem
                      key={index}
                      arrow={true}
                    />
                  ))}
                </div>
                <div className="px-8 flex flex-col gap-4 w-full">
                  <div className="flex flex-col h-4/6 flex-wrap w-full justify-between">
                    {Array.from(
                      Array(8).keys()
                    ).map((item, index) => (
                      <FeaturedCategoryItem />
                    ))}
                  </div>
                  <a className="flex flex-row items-center text-blue-500 gap-2">
                    <span>
                      Δες όλες τις κατηγορίες
                    </span>
                    <ChevronRightIcon className="h-4 w-4 text-blue-400 mt-1" />
                  </a>
                </div>
                <div className="px-8 flex flex-col gap-4 w-2/5">
                  <FeaturedShowCase />
                  <FeaturedShowCase />
                  <FeaturedShowCase />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};
export default CategoriesModal;

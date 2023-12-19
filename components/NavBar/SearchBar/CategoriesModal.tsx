import { Dispatch, SetStateAction } from "react";
import ReactPortal from "../../utils/ReactPortal";

import CategoryItem from "@/components/CategoryItem";

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
              <div className="h-[48rem] w-[86rem] flex flex-row gap-4 py-8 px-8">
                <div className="flex flex-col gap-6 w-1/5 overflow-y-scroll no-scrollbar">
                  {Array.from(
                    Array(10).keys()
                  ).map((item, index) => (
                    <CategoryItem key={index} />
                  ))}
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

import {
  Dispatch,
  SetStateAction,
  useRef,
  useEffect,
} from "react";
import ReactPortal from "@/components/utils/ReactPortal";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const UserDropdown = ({
  isOpen,
  setIsOpen,
}: ModalProps) => {
  if (!isOpen) {
    return;
  }

  const modalRef: any = useRef(null);

  // duplicated code in case I wanna change behavior
  useEffect(() => {
    // listen to clicks outside of modal
    function handleClickOutside(event: any) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    // listen to scrolls outside of modal
    function handleScrollOutside(event: any) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
    document.addEventListener(
      "scroll",
      handleScrollOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
      document.removeEventListener(
        "scroll",
        handleScrollOutside
      );
    };
  }, [modalRef]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div
        className="absolute top-4 right-4 z-[100]"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="">
          <div className="flex min-h-full items-end justify-center p-4 text-center">
            <div className="relative transform overflow-hidden border bg-white text-left text-black shadow-md transition-all my-16">
              <div
                className="flex flex-row gap-6 py-8 px-8 divide-x-2 divide-gray-100"
                ref={modalRef}
              >
                user dropdown
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};
export default UserDropdown;

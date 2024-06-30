import {
  Dispatch,
  SetStateAction,
  useRef,
  useEffect,
} from "react";
import ReactPortal from "@/components/utils/ReactPortal";
import { useRouter } from "next/navigation";
import { tabs } from "@/components/utils/tabs";

import DropDownItem from "@/components/Atoms/DropDownItem";

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
  const router = useRouter();

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

  const onClickTabEntry = (e: any, link: string) => {
    e.preventDefault();
    router.push(`/account/${link}`);
  };

  const onClickLogout = (e: any, link: string) => {
    e.preventDefault();
    console.log("logout");
  };

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
            <div
              className="relative transform overflow-hidden border bg-white text-left text-black shadow-md transition-all my-16"
              ref={modalRef}
            >
              <div className="flex flex-col py-4">
                {tabs.map((tab: any, index: number) => (
                  <DropDownItem
                    tab={tab}
                    key={index}
                    onClickTabEntry={onClickTabEntry}
                  />
                ))}
              </div>
              <div className="border-t">
                <DropDownItem
                  tab={{
                    label: "Αποσύνδεση",
                  }}
                  onClickTabEntry={onClickLogout}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};
export default UserDropdown;

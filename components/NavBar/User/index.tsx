import { useState } from "react";

import { ImportedImage } from "@/components/utils";

import UserDropdown from "./UserDropdown";

const User = () => {
  const [isVisible, setIsVisible] =
    useState<boolean>(false);

  return (
    <div className="relative">
      <ImportedImage
        src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
        onClick={() => setIsVisible(!isVisible)}
      />
      <UserDropdown
        isOpen={isVisible}
        setIsOpen={setIsVisible}
      />
    </div>
  );
};

export default User;

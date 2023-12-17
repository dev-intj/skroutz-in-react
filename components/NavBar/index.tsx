import SearchBar from "./SearchBar";
import AddressSection from "./AddressSection";
import LanguagesDropdown from "./LanguagesDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import UserDropdown from "./UserDropdown";

import Image from "next/image";

const NavBar = () => {
  const userLoggedIn = false;
  return (
    <>
      <nav className="z-10 fixed top-0 px-16 flex-no-wrap flex w-full items-center justify-between bg-white text-black h-28">
        <div className="flex flex-row gap-4 items-center">
          <div>
            <Image
              src="/logo.svg"
              width={175}
              height={50}
              alt="Skroutz logo"
            />
          </div>
          <SearchBar />
          <AddressSection />
          <LanguagesDropdown />
          <NotificationsDropdown />
          <UserDropdown />
        </div>
      </nav>
    </>
  );
};

export default NavBar;

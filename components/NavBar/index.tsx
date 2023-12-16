import SearchBar from "./SearchBar";
import AddressSection from "./AddressSection";
import LanguagesDropdown from "./LanguagesDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import UserDropdown from "./UserDropdown";

const NavBar = () => {
  const userLoggedIn = false;
  return (
    <>
      <nav className="z-10 fixed top-0 px-8 flex-no-wrap flex w-full items-center justify-between bg-white h-28 text-black">
        <div className="flex flex-row gap-4">
          <div>Skroutz</div>
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

"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import { Logo } from "@/components/utils";

import UserDropdown from "./User";
import SearchBar from "./SearchBar";
import AddressSection from "../Molecules/AddressDropdown";
import LanguagesDropdown from "../Molecules/LanguagesDropdown";
import NotificationsDropdown from "../Atoms/NotificationsDropdown";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

const NavBar = ({ mode }: any) => {
  const router = useRouter();
  const userLoggedIn = true;

  const [isVisible, setIsVisible] = useState(true);

  const navbarRef = useRef(null);

  // scroll effect to hide and show navbar on scroll
  useEffect(() => {
    const showNav = gsap
      .fromTo(
        navbarRef.current,
        {
          opacity: 0,
          y: -150,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        }
      )
      .progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1
          ? showNav.play()
          : showNav.reverse();
      },
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const heightToHideFrom = 126 + 5;
    const winScroll =
      document.body.scrollTop ||
      document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`${
        !isVisible && "shadow-xl"
      } z-10 fixed top-0 px-8 3xl:px-72 flex-no-wrap flex w-full items-center justify-between bg-white text-black h-28
      ${mode === "account" && "!bg-[#f8f8f8]"}
      `}
    >
      <div className="flex flex-row gap-12 items-center justify-between w-full">
        <div className="relative h-8 min-w-[11rem]">
          <Logo onClick={() => router.push("/")} />
        </div>
        <SearchBar width="w-2/6 h-12 max-w-[48rem]" />
        <div className="w-2/6 flex flex-row gap-4 justify-between items-center">
          {!userLoggedIn && (
            <button>Σύνδεση / Εγγραφή</button>
          )}
          <div className="flex flex-row">
            <AddressSection userLoggedIn={userLoggedIn} />
            <LanguagesDropdown />
          </div>
          {userLoggedIn && (
            <div className="flex flex-row gap-6 justify-between items-center">
              <ShoppingCartIcon className="h-8 w-8 text-gray-600" />
              <NotificationsDropdown />
              <UserDropdown />
            </div>
          )}
          {!userLoggedIn && (
            <ShoppingCartIcon className="h-8 w-8 text-gray-600" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

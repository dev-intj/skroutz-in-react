"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

import SearchBar from "./SearchBar";
import AddressSection from "./AddressSection";
import LanguagesDropdown from "./LanguagesDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import UserDropdown from "./UserDropdown";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
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
    let heightToHideFrom = 126 + 5;
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
      } z-10 fixed top-0 px-8 3xl:px-72 flex-no-wrap flex w-full items-center justify-between bg-white text-black h-32`}
    >
      <div className="flex flex-row gap-12 items-center justify-between w-full">
        <div className="relative h-32 min-w-[11rem]">
          <Image
            src={"./logo.svg"}
            alt="Current Image"
            layout={"fill"}
            objectFit={"contain"}
          />
        </div>
        <SearchBar width="w-full" />
        <div className="w-5/6 flex flex-row gap-4 justify-between items-center">
          {!userLoggedIn && (
            <button>Σύνδεση / Εγγραφή</button>
          )}
          <AddressSection userLoggedIn={userLoggedIn} />
          <LanguagesDropdown />
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

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

import SearchBar from "./SearchBar";
import AddressSection from "./AddressSection";
import LanguagesDropdown from "./LanguagesDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import UserDropdown from "./UserDropdown";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const userLoggedIn = false;

  const navbarRef = useRef(null);

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

  return (
    <nav
      ref={navbarRef}
      className="shadow-xl z-10 fixed top-0 px-8 3xl:px-72 flex-no-wrap flex w-full items-center justify-between bg-white text-black h-32"
    >
      <div className="flex flex-row gap-16 items-center justify-between w-full">
        <div className="relative h-32 min-w-[11rem]">
          <Image
            src={"/logo.svg"}
            alt="Current Image"
            layout={"fill"}
            objectFit={"contain"}
          />
        </div>
        <SearchBar width="w-full" />
        <div className="w-3/5 bg-red-300 flex flex-row gap-4 justify-between items-center">
          <AddressSection />
          <LanguagesDropdown />
          <div className="bg-red-300 flex flex-row gap-4 justify-between items-center">
            <NotificationsDropdown />
            <UserDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

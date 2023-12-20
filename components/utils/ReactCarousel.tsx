"use client";

import {
  createRef,
  useState,
  Children,
  useEffect,
} from "react";

import {
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";

function checkVisible(
  elm: any,
  threshold: any,
  mode: any
) {
  threshold = threshold || 0;
  mode = mode || "visible";

  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  var above = rect.bottom - threshold < 0;
  var below =
    rect.left - viewHeight + threshold >= 0;

  return mode === "above"
    ? above
    : mode === "below"
    ? below
    : !above && !below;
}

const ReactCarousel = ({
  children,
  className = "flex flex-row gap-4",
}: any) => {
  const containerRef =
    createRef<HTMLDivElement>();

  const goToNextInvisElem = (mode: string) => {
    if (containerRef.current) {
      const childrenArr = Array.from(
        Array(
          containerRef.current.children.length
        ).keys()
      ).map(
        (item, index) =>
          containerRef?.current?.children[index]
      );

      let newPos = childrenArr.findIndex(
        (child, index) =>
          checkVisible(
            containerRef?.current?.children[
              index
            ],
            100,
            mode
          )
      );

      if (newPos != -1) {
        containerRef.current.children[
          newPos
        ].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      } else {
        containerRef.current.children[0].scrollIntoView(
          {
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          }
        );
      }
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-[-1.4rem] top-[45%] z-10 bg-white rounded-full p-3 shadow-xl">
        <ChevronLeftIcon
          className="w-6 h-6"
          onClick={() =>
            goToNextInvisElem("above")
          }
        />
      </div>
      <div className="relative w-full overflow-x-scroll no-scrollbar">
        <div
          className={className}
          ref={containerRef}
        >
          {children}
        </div>
      </div>
      <div className="absolute right-[-1.4rem] top-[45%] z-10 bg-white rounded-full p-3 shadow-xl">
        <ChevronRightIcon
          className="w-6 h-6"
          onClick={() =>
            goToNextInvisElem("below")
          }
        />
      </div>
    </div>
  );
};

export default ReactCarousel;

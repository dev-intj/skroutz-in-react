import React from "react";
import NavBar from "@/components/NavBar";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// icons
import {
  UserIcon,
  InboxStackIcon,
  BellIcon,
  HeartIcon,
  StarIcon,
  ChatBubbleLeftIcon,
  WalletIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const tabs = [
  {
    label: "Ο λογαριασμός μου",
    icon: UserIcon,
    link: "my-account",
  },
  {
    label: "Παραγγελίες",
    icon: InboxStackIcon,
    link: "orders",
  },
  {
    label: "Ειδοποιήσεις",
    icon: BellIcon,
    link: "notifications",
  },
  {
    label: "Αγαπημένα",
    icon: HeartIcon,
    link: "favorites",
  },
  {
    label: "Αξιολογήσεις",
    icon: StarIcon,
    link: "reviews",
  },
  {
    label: "Συζητήσεις",
    icon: ChatBubbleLeftIcon,
    link: "discussions",
  },
  {
    label: "Skroutz Wallet",
    icon: WalletIcon,
    link: "wallet",
  },
  {
    label: "Skroutz Plus",
    icon: ChatBubbleLeftEllipsisIcon,
    link: "plus",
  },
  {
    label: "Ρυθμίσεις",
    icon: Cog6ToothIcon,
    link: "settings",
  },
  {
    label: "Βοήθεια",
    icon: QuestionMarkCircleIcon,
    link: "help",
  },
];

const AccountLayout = ({
  children,
  params,
  searchParams,
}: any) => {
  const [tabOpened, setTabOpened] = useState<any>(tabs[0]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname != undefined && pathname != null) {
      let currentRoute = pathname
        ?.split("?")[0]
        ?.split("/")[2];
      setTabOpened(
        tabs.find((tab: any) => tab.link === currentRoute)
      );
    } else {
      setTabOpened(tabs[0]);
    }
  }, [pathname]);

  const onClickTabEntry = (e: any, link: string) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <>
      <NavBar mode="account" />
      <main className="flex flex-col gap-12 bg-[#f1f1f1] h-screen">
        <div className="h-80 bg-[#f8f8f8] rounded-b-[6rem]"></div>
        <div className="flex flex-row px-24">
          <div className="flex flex-col gap-2 w-2/6 text-black">
            {tabs.map((tab: any, index: number) => (
              <a
                className={`flex flex-row gap-4 text-lg cursor-pointer p-4 ${
                  tabOpened?.label === tab.label
                    ? "text-black"
                    : "text-gray-400"
                }`}
                key={index}
                href={tab.link}
                onClick={(e) =>
                  onClickTabEntry(e, tab.link)
                }
              >
                <tab.icon
                  className={`w-6 h-6 my-auto ${
                    tabOpened?.label === tab.label
                      ? "text-gray-800"
                      : "text-gray-400"
                  }`}
                ></tab.icon>
                <span className="my-auto">{tab.label}</span>
              </a>
            ))}
          </div>
          {children}
        </div>
      </main>
    </>
  );
};

export default AccountLayout;

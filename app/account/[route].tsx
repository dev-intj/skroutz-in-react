"use client";
import AccountLayout from "@/components/Layouts/Account";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

const Page = ({ params, searchParams }: any) => {
  const [tabOpened, setTabOpened] = useState<any>(tabs[0]);
  const router = useRouter();

  useEffect(() => {
    if (params?.page) {
      setTabOpened(
        tabs.find((tab: any) => tab.link === params.page)
      );
    } else {
      setTabOpened(tabs[0]);
    }
  }, [router]);

  const onClickTabEntry = (e: any, link: string) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <AccountLayout>
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
              onClick={(e) => onClickTabEntry(e, tab.link)}
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
        <div className="w-full">tab content</div>
      </div>
    </AccountLayout>
  );
};

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = tabs.map((tab: any) => ({
    params: { route: tab.link },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Page;

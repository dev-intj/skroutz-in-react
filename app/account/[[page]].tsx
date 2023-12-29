"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const tabs = [
  {
    label: "Ο λογαριασμός μου",
    link: "my-account",
  },
  {
    label: "Παραγγελίες",
    link: "orders",
  },
  {
    label: "Ειδοποιήσεις",
    link: "notifications",
  },
  {
    label: "Αγαπημένα",
    link: "favorites",
  },
  {
    label: "Αξιολογήσεις",
    link: "reviews",
  },
  {
    label: "Συζητήσεις",
    link: "discussions",
  },
  {
    label: "Skroutz Wallet",
    link: "wallet",
  },
  {
    label: "Skroutz Plus",
    link: "plus",
  },
  {
    label: "Ρυθμίσεις",
    link: "settings",
  },
  {
    label: "Βοήθεια",
    link: "help",
  },
];

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/account/my-account");
  }, [router]);

  return <></>;
};

export async function getStaticPaths() {
  let paths = tabs.map((tab: any) => {
    return `/account/${tab.link}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export default Page;

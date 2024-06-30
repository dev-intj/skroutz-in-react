import React from "react";
import NavBar from "@/components/NavBar";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import AccountHeader from "../Organisms/Account/AccountHeader";

import { tabs } from "@/components/utils/tabs";

import TabSelector from "../Organisms/Account/TabSelector";

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
      const currentRoute = pathname
        ?.split("?")[0]
        ?.split("/account/")[1];
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
      <main className="flex flex-col gap-12 bg-[#f1f1f1] h-screen pt-28">
        <AccountHeader />
        <div className="flex flex-row px-24">
          <TabSelector
            tabOpened={tabOpened}
            onClickTabEntry={onClickTabEntry}
          />
          {children}
        </div>
      </main>
    </>
  );
};

export default AccountLayout;

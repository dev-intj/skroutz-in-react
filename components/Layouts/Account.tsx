import React from "react";
import NavBar from "@/components/NavBar";

const AccountLayout = ({ children }: any) => {
  return (
    <>
      <NavBar mode="account" />
      <main className="flex flex-col gap-12 bg-[#f1f1f1] h-screen">
        {children}
      </main>
    </>
  );
};

export default AccountLayout;

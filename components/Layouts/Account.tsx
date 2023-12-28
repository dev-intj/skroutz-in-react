import React from "react";
import NavBar from "@/components/NavBar";

const AccountLayout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default AccountLayout;

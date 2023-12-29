"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/account/my-account");
  }, [router]);

  return <></>;
};

export default Page;

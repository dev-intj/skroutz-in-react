import AccountLayout from "@/components/Layouts/Account";

const Page = ({ params, searchParams }: any) => {
  return <AccountLayout>{params.page}</AccountLayout>;
};

export default Page;

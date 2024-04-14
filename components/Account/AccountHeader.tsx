import {
  InboxStackIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

import AccountHeaderLogo from "../utils/accountHeaderLogo";
// comps
import AccountHeaderProfileShowcase from "./AccountHeaderProfileShowcase";

const DisplayStats = ({ Icon, label, num }: any) => {
  return (
    <div className="flex flex-col gap-2 text-gray-500 px-4 justify-center">
      <div>
        <Icon className="w-8 h-8 my-auto text-gray-500 mx-auto" />
      </div>
      <span className="text-xs text-center">{label}</span>
      <span className="text-xl text-center text-black font-bold">
        {num.toString()}
      </span>
    </div>
  );
};

const AccountHeader = () => {
  return (
    <div className="bg-[#f8f8f8] rounded-b-[6rem] shadow-sm h-42">
      <div className="px-32 flex flex-row h-full">
        <div className="flex w-full justify-start">
          <div className="my-auto">
            <AccountHeaderProfileShowcase
              username={"User 1"}
              isPlus={true}
              points={1300}
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="my-auto">
            <AccountHeaderLogo />
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex flex-row">
            <DisplayStats
              Icon={InboxStackIcon}
              label={"Παραγγελίες"}
              num={44}
            />
            <DisplayStats
              Icon={HeartIcon}
              label={"Αγαπημένα"}
              num={44}
            />
            <DisplayStats
              Icon={StarIcon}
              label={"Αξιολογήσεις"}
              num={44}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;

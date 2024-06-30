import {
  InboxStackIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

import AccountHeaderLogo from "../../utils/accountHeaderLogo";
// comps
import AccountHeaderProfileShowcase from "./AccountHeaderProfileShowcase";
import DisplayStats from "../../Atoms/DisplayStats";

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

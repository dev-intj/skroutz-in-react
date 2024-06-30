import {
  GlobeAltIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const LanguagesDropdown = () => {
  return (
    <div className="flex flex-row gap-1 items-center border-l-2 pl-4">
      <GlobeAltIcon className="h-6 w-6 text-gray-600" />
      <span>EL</span>
      <ChevronDownIcon className="h-4 w-4 text-gray-600 font-bold my-auto" />
    </div>
  );
};

export default LanguagesDropdown;

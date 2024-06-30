import { tabs } from "@/components/utils/tabs";

const TabSelector = ({
  tabOpened,
  onClickTabEntry,
}: any) => {
  return (
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
  );
};

export default TabSelector;

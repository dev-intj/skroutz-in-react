const DropDownItem = ({ tab, onClickTabEntry }: any) => {
  return (
    <a
      className="flex flex-row py-4 px-6 cursor-pointer w-64 text-sm text-black hover:bg-gray-100 hover:text-blue-400"
      href={tab.link}
      onClick={(e) => onClickTabEntry(e, tab.link)}
    >
      <span className="my-auto">{tab.label}</span>
    </a>
  );
};

export default DropDownItem;

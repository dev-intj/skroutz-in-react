const PopularSearchesItem = ({
  title,
  href,
}: any) => {
  return (
    <a
      className="border rounded-full px-4 py-2 text-sm text-gray-500 border-gray-200"
      href={href}
    >
      {title}
    </a>
  );
};

export default PopularSearchesItem;

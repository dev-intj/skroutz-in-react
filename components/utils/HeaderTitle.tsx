const HeaderTitle = ({
  title,
  icon,
  iconWrapper,
}: any) => {
  return (
    <div className="flex flex-row gap-4">
      {icon &&
        (iconWrapper ? (
          <div>
            <div className={iconWrapper}>
              {icon}
            </div>
          </div>
        ) : (
          <div>{icon}</div>
        ))}
      <h4 className="text-xl font-bold my-auto">
        {title}
      </h4>
    </div>
  );
};

export default HeaderTitle;

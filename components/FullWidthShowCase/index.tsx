const FullWidthShowCase = ({ title, subTitle, link }: any) => {
  return (
    <div className="flex flex-col items-center mx-4 bg-white rounded-3xl shadow md:flex-row h-80">
      <a href={link} className="h-full w-1/2">
        <img
          className="object-cover rounded-t-lg h-full w-full rounded-3xl rounded-r-none"
          src="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=2192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </a>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {subTitle}
        </p>
        <a href={link}>Ανακάλυψε υπέροχα δώρα</a>
      </div>
    </div>
  );
};

export default FullWidthShowCase;

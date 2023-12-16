const FullWidthShowCaseWithCategories = ({ showImage = true }: any) => {
  return (
    <a
      href="#"
      className="flex flex-col mx-4 items-center bg-white rounded-3xl shadow md:flex-row h-80"
    >
      {showImage && (
        <img
          className="object-cover rounded-t-lg h-full w-1/2 rounded-3xl rounded-r-none"
          src="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=2192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Χριστούγεννα με Barbie
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Μαγικές τιμές για τις πιο ξεχωριστές στιγμές!
        </p>
      </div>
    </a>
  );
};

export default FullWidthShowCaseWithCategories;

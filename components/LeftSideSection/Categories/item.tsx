const CategoryItem = () => {
  return (
    <a
      href="https://mdbootstrap.com//img/Photos/Square/1.jpg"
      className="flex flex-row gap-3"
    >
      <div className="relative rounded-lg overflow-hidden w-12 h-12">
        <img
          src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
          className="h-auto max-w-full rounded-full"
        />
      </div>
      <span className="my-auto text-md">Categories</span>
    </a>
  );
};

export default CategoryItem;

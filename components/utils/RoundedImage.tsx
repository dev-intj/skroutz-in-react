const ImportedImage = ({
  src = "/",
  width = "w-12 h-12",
}: any) => {
  return (
    <div
      className={`relative rounded-lg overflow-hidden ${width}`}
    >
      <img
        src={src}
        className="h-auto max-w-full rounded-full"
      />
    </div>
  );
};

export default ImportedImage;

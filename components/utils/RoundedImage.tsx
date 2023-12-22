const ImportedImage = ({
  src = "/",
  width = "w-12 h-12",
  bgColor = "#ffda00",
}: any) => {
  return (
    <div
      className={`flex items-center overflow-hidden rounded-full ${width}`}
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={src}
        className="h-auto max-w-full rounded-full mt-auto"
      />
    </div>
  );
};

export default ImportedImage;

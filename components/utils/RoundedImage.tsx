const ImportedImage = ({
  src = "/",
  width = "w-12 h-12",
  bgColor = "#ffda00",
  imgClass = "mt-auto",
  onClick = () => {},
}: any) => {
  return (
    <div
      className={`flex items-center overflow-hidden rounded-full ${width}`}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <img
        src={src}
        className={`h-auto max-w-full rounded-full ${imgClass}`}
      />
    </div>
  );
};

export default ImportedImage;

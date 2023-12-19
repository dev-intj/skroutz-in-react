const ImportedImage = ({
  src = "/",
  width = "w-12 h-12",
}: any) => {
  return (
    <div
      className={`flex items-center overflow-hidden bg-gray-400 rounded-full ${width}`}
    >
      <img
        src={src}
        className="h-auto max-w-full rounded-full mt-auto"
      />
    </div>
  );
};

export default ImportedImage;

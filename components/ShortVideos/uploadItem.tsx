const UploadShortVideoItem = () => {
  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg relative w-[8rem] h-80 bg-blue-100
    border-blue-300 border-[0.1rem] flex flex-col justify-center items-center gap-4"
      style={{
        background:
          "linear-gradient(to bottom, rgba(240,251,253,0.8) 0%, rgba(206,233,254,0.8) 100%)",
      }}
    >
      <img
        className="w-16"
        src="https://c.scdn.gr/assets/schwartz/short_video_upload/upload-entrypoint-c932f7520b4f5d96b581f2e9582369a0.png"
      />
      <span className="text-center">
        Ανέβασε <br /> video
      </span>
    </div>
  );
};

export default UploadShortVideoItem;

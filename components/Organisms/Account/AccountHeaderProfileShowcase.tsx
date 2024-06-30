import { RoundedImage } from "../../utils";

const AccountHeaderProfileShowcase = ({
  username,
  isPlus,
  points,
}: any) => {
  return (
    <div className="flex flex-row gap-8">
      <div>
        <RoundedImage
          src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
          width="h-32 w-32 border-8 border-gray-200"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xl font-bold mb-2">
          {username}
        </span>
        <span className="text-sm text-gray-500">
          Προβολή προφιλ
        </span>
        {isPlus && (
          <span className="text-sm text-indigo-800 font-bold">
            Μέλος Skroutz Plus
          </span>
        )}
        {points > 0 && (
          <span className="text-sm text-indigo-800 font-bold">
            {points} coins
          </span>
        )}
      </div>
    </div>
  );
};

export default AccountHeaderProfileShowcase;

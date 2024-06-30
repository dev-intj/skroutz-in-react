import { MapPinIcon } from "@heroicons/react/24/outline";

const AddressSection = ({ userLoggedIn }: any) => {
  return (
    <div className="flex flex-row gap-1 items-center pr-4">
      <MapPinIcon className="h-6 w-6 text-gray-600" />
      <span>Παράδοση σε Καλλιθέα 17671</span>
    </div>
  );
};

export default AddressSection;

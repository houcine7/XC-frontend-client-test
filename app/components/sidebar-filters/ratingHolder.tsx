import { IoStarSharp } from "react-icons/io5";
const RatingHolder = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="starts-container flex items-center">
          <IoStarSharp size={18} fill="gold" />
          <IoStarSharp size={18} fill="gold" />
          <IoStarSharp size={18} fill="gold" />
          <IoStarSharp size={18} fill="gold" />
          <IoStarSharp size={18} fill="gold" />
        </div>

        <div className="relative w-16 h-4 rounded">
          <span className="h-full w-full bg-gray-200 block rounded"></span>
        </div>

        <div>
          <p className="font-light text-sm text-gray-400">125</p>
        </div>
      </div>
    </>
  );
};

export default RatingHolder;

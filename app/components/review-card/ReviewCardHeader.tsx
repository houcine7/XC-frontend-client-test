import { IoStarSharp } from "react-icons/io5";

const ReviewCardHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <span className="w-6 h-6 rounded bg-violet-400"></span>
        <div className="py-1 px-2 bg-gray-100 rounded text-xs font-normal">
          IOS
        </div>
        <p className="font-bold text-md tracking-wide">I use it every day!</p>
        <div className="flex">
          <IoStarSharp size={24} fill="gold" />
          <IoStarSharp size={24} fill="gold" />
          <IoStarSharp size={24} fill="gold" />
          <IoStarSharp size={24} fill="gold" />
          <IoStarSharp size={24} fill="gold" />
        </div>
      </div>

      <div className="border border-gray-600 px-2 py-1 rounded-sm">
        <p className="text-xs font-medium uppercase">Translated</p>
      </div>
    </div>
  );
};

export default ReviewCardHeader;

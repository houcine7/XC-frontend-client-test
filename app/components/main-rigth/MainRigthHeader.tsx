import { IoMdArrowDropdown } from "react-icons/io";

import { IoNotificationsSharp } from "react-icons/io5";

import { BiWifi, BiCodeCurly } from "react-icons/bi";

import { ImDownload3 } from "react-icons/im";

const MainRigthHeader = () => {
  return (
    <div className="flex justify-between mb-2 items-center ">
      <p className="text-sm font-semibold items-center">
        viewing 1-10 of 155 reviews
      </p>

      <div className="flex items-center gap-4 ">
        <button className="text-sm border border-gray-300 flex justify-around items-center py-1 px-2 gap-2 rounded font-medium">
          <span>
            <IoNotificationsSharp />
          </span>
          create alert
          <span>
            <IoMdArrowDropdown />
          </span>
        </button>
        <div className="text-sm border border-gray-300 flex justify-around py-1 px-2 gap-3 rounded font-medium">
          <span className="rotate-45 cursor-pointer">
            <BiWifi size={18} />
          </span>
          <span className="cursor-pointer">
            <BiCodeCurly size={18} />
          </span>
          <span className="cursor-pointer">
            <ImDownload3 size={18} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainRigthHeader;

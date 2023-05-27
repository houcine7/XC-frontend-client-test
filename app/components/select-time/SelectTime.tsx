import { BsCalendar4Week } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";

const SelectTime = () => {
  return (
    <div className="relative mb-4">
      <select
        id="time-selector"
        className="w-full appearance-none rounded border border-gray-300 text-gray-500  h-9 pl-9 pr-3 outline-none"
      >
        <option value="time1">All time</option>
        <option value="time1">All time</option>
        <option value="time1">All time</option>
      </select>

      <label className="absolute left-2 top-2" htmlFor="time-selector">
        <BsCalendar4Week size={20} />
      </label>

      <label className="absolute right-2 top-3 cursor-pointer" htmlFor="time">
        <SlArrowDown />
      </label>
    </div>
  );
};

export default SelectTime;

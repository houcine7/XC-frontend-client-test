"use client";
import { useStateValue } from "@/app/context/contextProvider";
import { actionType } from "@/app/context/reducer";
import { SyntheticEvent } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const FilterRightInput = ({
  name,
  options,
}: {
  name: string;
  options: {
    name: string;
    value: string;
  }[];
}) => {
  //
  const { state, dispatch } = useStateValue();

  const handleSelect = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
    if (name.toLowerCase() == "sorting") {
      const sortingOrder = e.currentTarget.value;

      dispatch({
        type: actionType.SET_CURRENT_SORTING_ORDER,
        payload: sortingOrder,
      });

      //
      const sortedData = state.currentData.sort((item1, item2) => {
        const a = new Date(item1.reviewDate);
        const b = new Date(item2.reviewDate);
        return sortingOrder == "newestFirst"
          ? b.getTime() - a.getTime()
          : a.getTime() - b.getTime();
      });

      // console.log(sortedData.slice(0, 10));

      dispatch({
        type: actionType.SET_CURRENT_DATA,
        payload: sortedData,
      });
    }
  };

  return (
    <div className="container flex flex-col gap-1">
      <label className="text-md font-normal text-gray-600 ">{name} </label>

      <div className="relative">
        <select
          className="appearance-none outline-none py-0.5 px-2 pr-16 border border-gray-300 rounded"
          onChange={(e) => handleSelect(e)}
        >
          {options.map((item, index) => (
            <option
              key={index}
              value={item.value}
              className="px-2 py-1 border-gray-300"
            >
              {item.name}
            </option>
          ))}
        </select>

        <span className="absolute right-2 top-0.5">
          <RiArrowUpSLine size={18} />
        </span>
        <span className="absolute right-2 bottom-0.5">
          <RiArrowDownSLine size={18} />
        </span>
      </div>
    </div>
  );
};

export default FilterRightInput;

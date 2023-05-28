"use client";

import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

// function to sort data after filtering by sortinOrder state
export const sortFiltersData = (data: any, sortingOrder: string) => {
  return data.sort((item1: any, item2: any) => {
    const a = new Date(item1.reviewDate);
    const b = new Date(item2.reviewDate);
    return sortingOrder == "newestFirst"
      ? b.getTime() - a.getTime()
      : a.getTime() - b.getTime();
  });
};
//
const SideBarFilter = ({ name, Childs }: { name: string; Childs: any }) => {
  const [showItems, setShowItems] = useState(true);

  return (
    <div className="container mb-4">
      <div
        className="flex gap-1 font-semibold text-sm mb-2 cursor-pointer"
        onClick={() => setShowItems((prevState) => !prevState)}
      >
        <p>
          {showItems ? (
            <IoMdArrowDropdown size={20} />
          ) : (
            <IoMdArrowDropright size={20} />
          )}
        </p>
        <p>filter by rating</p>
      </div>

      {showItems && (
        <div className="child-component transition-all duration-300 ease-in-out">
          {Childs}
        </div>
      )}
    </div>
  );
};

export default SideBarFilter;

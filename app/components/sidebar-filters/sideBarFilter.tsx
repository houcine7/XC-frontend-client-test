"use client";

import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

const SideBarFilter = ({
  name,
  Child,
}: {
  name: string;
  Child: JSX.Element;
}) => {
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
          {Child}
          {Child}
          {Child}
          {Child}
          {Child}
          {Child}
        </div>
      )}
    </div>
  );
};

export default SideBarFilter;

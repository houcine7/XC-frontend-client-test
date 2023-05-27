"use client";

import React, { useState } from "react";

import { SlArrowDown } from "react-icons/sl";
import DropDownItem, { option } from "./dropDownItem";

const INITIAL_STATE = {
  name: "My app 2",
  color: "violet",
  value: "the value",
};

const dummyDropDownList = [
  {
    name: "My app 2",
    color: "orange",
    value: "the value1",
  },
  {
    name: "My app 5",
    color: "pink",
    value: "the value1",
  },
  {
    name: "My app 2",
    color: "yellow",
    value: "the value5",
  },
  {
    name: "My app 4",
    color: "green",
    value: "the value1",
  },
];

const Select = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [currentProduct, setCurrentProduct] = useState(INITIAL_STATE);

  const handelClick = (): void => {
    setShowDropdown((prevState) => !prevState);
  };

  const handelChoice = (item: option): void => {
    setShowDropdown(false);

    setCurrentProduct({
      name: item.name,
      color: item.color,
      value: item.value,
    });
  };

  return (
    <div className="container relative w-select-input-right bg--100  ">
      <div
        className="cursor-pointer rounded border border-gray-300 px-4  flex justify-between items-center w-full"
        onClick={handelClick}
      >
        <div className="flex items-center gap-4 ">
          <span
            className={`rounded w-6 h-6`}
            style={{ backgroundColor: currentProduct.color }}
          ></span>
          <p className="text-gray-900 text-lg font-medium">
            {currentProduct.name}
          </p>
        </div>
        <SlArrowDown size={14} />
      </div>

      {showDropdown && (
        <div className="z-40 absolute dropdown options border-b border-l border-r border-gray-40  w-full bg-gray-50">
          {dummyDropDownList.map((item, index) => (
            <DropDownItem key={index} item={item} handelChoice={handelChoice} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;

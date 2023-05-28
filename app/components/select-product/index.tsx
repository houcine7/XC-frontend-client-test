"use client";

import React, { useState } from "react";

import { SlArrowDown } from "react-icons/sl";
import DropDownItem, { option } from "./dropDownItem";
import { dummyData } from "@/app/data/data";
import { useStateValue } from "@/app/context/contextProvider";
import { actionType } from "@/app/context/reducer";
import { sortFiltersData } from "../sidebar-filters/sideBarFilter";

let dropDownApps: string[] = new Array();

dummyData.forEach((item) => {
  if (!dropDownApps.includes(item.appID.split(".")[1])) {
    dropDownApps.push(item.appID.split(".")[1]);
  }
});

const Select = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { state, dispatch } = useStateValue();

  const handelClick = (): void => {
    setShowDropdown((prevState) => !prevState);
  };

  const handelChoice = (option: option): void => {
    setShowDropdown(false);

    dispatch({
      type: actionType.SET_CURRENT_APP,
      payload: { name: option.name, color: option.color, value: option.value },
    });

    const filtredData = state.currentData.filter(
      (dataItem) => dataItem.appID.split(".")[1] == option.name
    );

    if (filtredData.length != 0) {
      dispatch({
        type: actionType.SET_CURRENT_DATA,
        payload: sortFiltersData(filtredData, state.sortingOrder),
      });
    } else {
      const filtredData = dummyData.filter((dataItem) => {
        if (state.searchKey != "") {
          return (
            (dataItem.reviewHeading
              .toLowerCase()
              .includes(state.searchKey.toLowerCase()) ||
              (dataItem.reviewText
                .toLowerCase()
                .includes(state.searchKey.toLowerCase()) &&
                (state.versionSelected != null
                  ? state.versionSelected == dataItem.version
                  : true))) &&
            (state.ratingSelected != null
              ? state.ratingSelected + "" == dataItem.rating
              : true) &&
            (state.countrySelected != null
              ? state.countrySelected == dataItem.countryName
              : true) &&
            dataItem.appID.split(".")[1] == option.name
          );
        } else {
          return (
            (state.versionSelected != null
              ? state.versionSelected == dataItem.version
              : true) &&
            (state.ratingSelected != null
              ? state.ratingSelected + "" == dataItem.rating
              : true) &&
            (state.countrySelected != null
              ? state.countrySelected == dataItem.countryName
              : true) &&
            dataItem.appID.split(".")[1] == option.name
          );
        }
      });

      dispatch({
        type: actionType.SET_CURRENT_DATA,
        payload: sortFiltersData(filtredData, state.sortingOrder),
      });
    }
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
            style={{ backgroundColor: state.currentApp.color }}
          ></span>
          <p className="text-gray-900 text-lg font-medium">
            {state.currentApp.name}
          </p>
        </div>
        <SlArrowDown size={14} />
      </div>

      {showDropdown && (
        <div className="z-40 absolute dropdown options border-b border-l border-r border-gray-40  w-full bg-gray-50">
          {dropDownApps.map((dropDownItem, index) => (
            <DropDownItem
              key={index}
              item={{
                color: "blue",
                name: dropDownItem,
                value: dropDownItem,
              }}
              handelChoice={() =>
                handelChoice({
                  color: "#8900FF",
                  name: dropDownItem,
                  value: dropDownItem,
                })
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;

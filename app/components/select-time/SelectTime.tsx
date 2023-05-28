"use client";

import { useStateValue } from "@/app/context/contextProvider";
import { actionType } from "@/app/context/reducer";
import { useState } from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { sortFiltersData } from "../sidebar-filters/sideBarFilter";

const SelectTime = () => {
  const { state, dispatch } = useStateValue();

  const [showDropdown, setShowDropdown] = useState(false);

  const [dateRange, setDateRange] = useState({
    strtingDate: "",
    endingDate: "",
  });

  const handelClick = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handelChange = (e: any) => {
    setDateRange((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handelClear = () => {
    setDateRange({
      endingDate: "",
      strtingDate: "",
    });
  };

  const handelFiler = () => {
    //
    setShowDropdown(false);
    if (dateRange.strtingDate != "" && dateRange.endingDate != "") {
      dispatch({
        type: actionType.SET_DATE_RANGE,
        payload: dateRange,
      });

      const filtredData = state.currentData.filter((item) => {
        const dateTime = new Date(item.reviewDate);
        const startTime = new Date(dateRange.strtingDate);
        const endTime = new Date(dateRange.endingDate);
        // console.log("heeere");

        return (
          dateTime.getTime() <= endTime.getTime() &&
          dateTime.getTime() >= startTime.getTime()
        );
      });

      dispatch({
        type: actionType.SET_CURRENT_DATA,
        payload: sortFiltersData(filtredData, state.sortingOrder),
      });
    }
  };

  return (
    <div className="relative mb-4">
      <div
        id="time-selector"
        className="w-full flex flex-col justify-center appearance-none rounded border border-gray-300 text-gray-500  h-9 pl-9 pr-3 outline-none"
        onClick={handelClick}
      >
        <p>All time</p>
      </div>

      {showDropdown && (
        <div className="absolute w-full top-9 z-30 p-4 bg-gray-50 border border-gray-300 container">
          <div className="py-1">
            <label htmlFor="start" className="py-4">
              Sarts from:
            </label>
            <input
              id="start"
              name="strtingDate"
              type="datetime-local"
              value={dateRange.strtingDate}
              onChange={(e) => handelChange(e)}
              className="container rounded border border-gray-300 text-gray-500  h-9 px-2 py-0.5 outline-none"
            />
          </div>

          <div className="py-1">
            <label htmlFor="end" className="py-4">
              Ends at:
            </label>
            <input
              id="end"
              name="endingDate"
              value={dateRange.endingDate}
              type="datetime-local"
              onChange={(e) => handelChange(e)}
              className="container rounded border border-gray-300 text-gray-500  h-9 px-2 py-0.5 outline-none"
            />
          </div>

          <div className="pt-2 flex gap-4">
            <button
              onClick={handelFiler}
              className="bg-violet-300 rounded px-2 py-2 transition ease-in-out duration-500 text-white text-sm font-semibold hover:bg-violet-700"
            >
              Filter by range
            </button>

            <button
              onClick={handelClear}
              className="bg-red-300 rounded px-2 py-2 transition ease-in-out duration-500 text-white text-sm font-semibold hover:bg-red-500"
            >
              Clear range
            </button>
          </div>
        </div>
      )}

      <label className="absolute left-2 top-2" htmlFor="time-selector">
        <BsCalendar4Week size={20} onClick={handelClick} />
      </label>
      <label className="absolute right-2 top-3 cursor-pointer" htmlFor="time">
        <SlArrowDown onClick={handelClick} />
      </label>
    </div>
  );
};

export default SelectTime;

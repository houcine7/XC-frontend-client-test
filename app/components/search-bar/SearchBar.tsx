"use client";

import { useStateValue } from "@/app/context/contextProvider";
import { actionType } from "@/app/context/reducer";
import { dummyData } from "@/app/data/data";
import { ChangeEvent, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { sortFiltersData } from "../sidebar-filters/sideBarFilter";

const SearchBar = () => {
  const { state, dispatch } = useStateValue();

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: actionType.SET_SEARCH_KEY,
      payload: e.currentTarget.value,
    });
  };

  useEffect(() => {
    async function fetchSearch(key: string) {
      try {
        const keySearchResult = dummyData.filter((item) => {
          return (
            item.reviewHeading.toLowerCase().includes(key.toLowerCase()) ||
            item.reviewText.toLowerCase().includes(key.toLowerCase())
          );
        });

        dispatch({
          type: actionType.SET_CURRENT_DATA,
          payload: sortFiltersData(keySearchResult, state.sortingOrder),
        });
      } catch (error) {
        console.log(error);
      }
    }

    let timer = setTimeout(() => {
      if (state.searchKey.length > 0) fetchSearch(state.searchKey);
      else {
        dispatch({
          type: actionType.SET_CURRENT_DATA,
          payload: sortFiltersData(dummyData, state.searchKey),
        });
      }
    }, 400);

    // use effect cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [state.searchKey, dispatch]);

  return (
    <div className="w-full relative mb-2">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search"
        className="w-full rounded border border-gray-300 text-gray-500  h-9 pl-9 pr-3 outline-none"
        onChange={(e) => handelChange(e)}
      />
      <label className="absolute left-2 top-2" htmlFor="search">
        <BsSearch size={20} />
      </label>
    </div>
  );
};

export default SearchBar;

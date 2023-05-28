"use client";

import { useStateValue } from "@/app/context/contextProvider";
import CountryFlag from "../country-flag/CountryFlag";
import { dummyData } from "@/app/data/data";
import { actionType } from "@/app/context/reducer";
import { sortFiltersData } from "./sideBarFilter";

const CountryHolder = ({ countryName }: { countryName: string }) => {
  const { state, dispatch } = useStateValue();

  const handelClick = () => {
    const filtredData = dummyData.filter(
      (item) => item.countryName === countryName
    );
    dispatch({
      type: actionType.SET_CURRENT_DATA,
      payload: sortFiltersData(filtredData, state.sortingOrder),
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={handelClick}
      >
        <CountryFlag countryName={countryName} />
        {/* <img src="/uk-img.png" alt="country flag" className="w-4 h-3 rounded" /> */}
        <p>{countryName}</p>
      </div>
      <div>
        <p className="font-light text-sm text-gray-400">44</p>
      </div>
    </div>
  );
};

export default CountryHolder;

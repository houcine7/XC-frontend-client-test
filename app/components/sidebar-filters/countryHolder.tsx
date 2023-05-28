"use client";

import { useStateValue } from "@/app/context/contextProvider";
import CountryFlag from "../country-flag/CountryFlag";
import { dummyData } from "@/app/data/data";
import { actionType } from "@/app/context/reducer";
import { sortFiltersData } from "./sideBarFilter";

const gettNumberItemsByCountry = (data: any, countryName: string): number => {
  let counter = 0;
  data.forEach((item: any) => {
    if (item.countryName === countryName) counter++;
  });

  return counter;
};

const CountryHolder = ({ countryName }: { countryName: string }) => {
  const { state, dispatch } = useStateValue();

  const handelClick = () => {
    const filtredData = state.currentData.filter(
      (item) => item.countryName === countryName
    );

    dispatch({
      type: actionType.SET_FILTERS_STATE,
      payload: { countrySelected: countryName },
    });

    if (filtredData.length != 0) {
      dispatch({
        type: actionType.SET_CURRENT_DATA,
        payload: sortFiltersData(filtredData, state.sortingOrder),
      });
    } else {
      const filtredData = dummyData.filter((item) => {
        if (state.searchKey != "") {
          return (
            (item.reviewHeading
              .toLowerCase()
              .includes(state.searchKey.toLowerCase()) ||
              (item.reviewText
                .toLowerCase()
                .includes(state.searchKey.toLowerCase()) &&
                (state.versionSelected != null
                  ? state.versionSelected == item.version
                  : true))) &&
            (state.ratingSelected != null
              ? state.ratingSelected + "" == item.rating
              : true) &&
            (state.currentApp.name != "My App"
              ? state.currentApp.name == item.appID.split(".")[1]
              : true) &&
            countryName == item.countryName
          );
        } else {
          return (
            (state.versionSelected != null
              ? state.versionSelected == item.version
              : true) &&
            (state.ratingSelected != null
              ? state.ratingSelected + "" == item.rating
              : true) &&
            (state.currentApp.name != "My App"
              ? state.currentApp.name == item.appID.split(".")[1]
              : true) &&
            countryName == item.countryName
          );
        }
      });

      dispatch({
        type: actionType.SET_CURRENT_DATA,
        payload: sortFiltersData(filtredData, state.sortingOrder),
      });
    }
  };

  const counterByFlag = gettNumberItemsByCountry(
    state.currentData,
    countryName
  );

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
        <p className="font-light text-sm text-gray-400">{counterByFlag}</p>
      </div>
    </div>
  );
};

export default CountryHolder;
